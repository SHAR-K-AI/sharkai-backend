import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTestDto } from '../dto/create-test.dto';
import { Test } from '../entities/test.entity';
import { TestQuestion } from '../entities/test-question.entity';
import { TestAnswer } from '../entities/test-answer.entity';

@Injectable()
export class TestsService {
    constructor(
        @InjectRepository(Test) private testRepo: Repository<Test>,
        @InjectRepository(TestQuestion) private testQuestionRepo: Repository<TestQuestion>,
        @InjectRepository(TestAnswer) private testAnswerRepo: Repository<TestAnswer>,
    ) {}

    async create(createTestDto: CreateTestDto): Promise<Test> {

        // Створення тесту
        const test = this.testRepo.create({
            name: createTestDto.name,
            description: createTestDto.description,
            test_type: createTestDto.test_type,
        });

        // Збереження тесту в базу
        const savedTest = await this.testRepo.save(test);

        // Збереження питань та відповідей
        for (const question of createTestDto.questions) {
            // Створення питання
            const questionEntity = this.testQuestionRepo.create({
                test_id: savedTest.test_id,
                question_text: question.question_text,
                question_type: question.question_type,
                order: question.order,
            });

            const savedQuestion = await this.testQuestionRepo.save(questionEntity);

            // Збереження відповідей для питання
            for (const answer of question.answers) {
                const answerEntity = this.testAnswerRepo.create({
                    question_id: savedQuestion.question_id,
                    answer_text: answer.answer_text,
                    score_value: answer.score_value,
                    category: answer.category,
                });

                await this.testAnswerRepo.save(answerEntity);
            }
        }

        return savedTest;
    }

    async findAll(): Promise<Test[]> {
        return this.testRepo.find({ relations: ['questions', 'questions.answers'] });
    }

    async findOne(id: number): Promise<Test> {
        return this.testRepo.findOne({
            where: { test_id: id },
            relations: ['questions', 'questions.answers'],
        });
    }

    async remove(id: number): Promise<void> {
        await this.testRepo.delete(id);
    }
}

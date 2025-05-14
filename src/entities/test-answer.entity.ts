import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { TestQuestion } from './test-question.entity';

@Entity('test_answers')
export class TestAnswer {
    @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
    answer_id: number;

    @Column({ type: 'text' })
    answer_text: string;

    @Column({ type: 'float', default: 0 })
    score_value: number;

    @Column({ type: 'varchar', length: 100, nullable: true })
    category: string;

    @Column({ type: 'bigint', unsigned: true })
    question_id: number;

    @ManyToOne(() => TestQuestion, question => question.answers, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'question_id' })
    question: TestQuestion;
}

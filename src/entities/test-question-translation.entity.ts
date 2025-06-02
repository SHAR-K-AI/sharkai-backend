import {
    Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn
} from 'typeorm';
import {TestQuestion} from "./test-question.entity";

@Entity('test_question_translations')
export class TestQuestionTranslation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 5 })
    language: string;

    @Column({ type: 'text' })
    text: string;

    @ManyToOne(() => TestQuestion, question => question.translations, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'question_id' })
    question: TestQuestion;
}

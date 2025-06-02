import {
    Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn
} from 'typeorm';
import {TestAnswerOption} from "./test-answer-option.entity";

@Entity('test_answer_option_translations')
export class TestAnswerOptionTranslation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 5 })
    language: string;

    @Column({ type: 'text' })
    text: string;

    @ManyToOne(() => TestAnswerOption, option => option.translations, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'answer_option_id' })
    answerOption: TestAnswerOption;
}

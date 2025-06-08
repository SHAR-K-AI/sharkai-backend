import {
    Entity, PrimaryColumn, Column, ManyToOne, JoinColumn,
    CreateDateColumn, UpdateDateColumn, OneToMany
} from 'typeorm';
import {TestAnswerOptionTranslation} from "./test-answer-option-translation.entity";
import {TestQuestion} from "./test-question.entity";


@Entity('test_answer_options')
export class TestAnswerOption {
    @PrimaryColumn({ type: 'varchar' })
    id: string;

    @Column()
    value: string;

    @Column({ type: 'int' })
    order: number;

    @Column({ name: 'is_correct', type: 'boolean', default: false })
    isCorrect: boolean;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @ManyToOne(() => TestQuestion, question => question.options, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'question_id' })
    question: TestQuestion;

    @OneToMany(() => TestAnswerOptionTranslation, t => t.answerOption, { cascade: true })
    translations: TestAnswerOptionTranslation[];
}

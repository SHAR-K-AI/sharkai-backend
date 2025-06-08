import {
    Entity, PrimaryColumn, Column, ManyToOne, JoinColumn,
    CreateDateColumn, UpdateDateColumn, OneToMany
} from 'typeorm';
import { TestAnswerOption } from './test-answer-option.entity';
import {TestQuestionTranslation} from "./test-question-translation.entity";
import {Test} from "./test.entity";


@Entity('test_questions')
export class TestQuestion {
    @PrimaryColumn({ type: 'varchar' })
    id: string;

    @Column({ name: 'order', type: 'int' })
    order: number;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @ManyToOne(() => Test, test => test.questions, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'test_id' })
    test: Test;

    @OneToMany(() => TestQuestionTranslation, t => t.question, { cascade: true })
    translations: TestQuestionTranslation[];

    @OneToMany(() => TestAnswerOption, option => option.question, { cascade: true })
    options: TestAnswerOption[];
}

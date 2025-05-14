import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Test } from './test.entity';
import { TestAnswer } from './test-answer.entity';

@Entity('test_questions')
export class TestQuestion {
    @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
    question_id: number;

    @Column({ type: 'text' })
    question_text: string;

    @Column({ type: 'varchar', length: 50 })
    question_type: 'single_choice' | 'multiple_choice' | 'scale' | 'text_input';

    @Column({ type: 'int', default: 0 })
    order: number;

    @Column({ type: 'bigint', unsigned: true })
    test_id: number;

    @ManyToOne(() => Test, test => test.questions, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'test_id' })
    test: Test;

    @OneToMany(() => TestAnswer, answer => answer.question)
    answers: TestAnswer[];
}

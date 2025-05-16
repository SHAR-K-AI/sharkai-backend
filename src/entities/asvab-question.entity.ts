import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn} from 'typeorm';
import { AsvabTest } from './asvab-test.entity';
import { AsvabAnswer } from './asvab-answer.entity';

@Entity('asvab_questions')
export class AsvabQuestion {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'text' })
    text: string;

    @Column()
    category: string;

    @ManyToOne(() => AsvabTest, (test) => test.questions, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'test_id' })
    test: AsvabTest;

    @OneToMany(() => AsvabAnswer, (answer) => answer.question, { cascade: true })
    answers: AsvabAnswer[];
}

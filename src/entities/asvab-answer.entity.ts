import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from 'typeorm';
import { AsvabQuestion } from './asvab-question.entity';

@Entity('asvab_answers')
export class AsvabAnswer {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    text: string;

    @Column({ name: 'is_correct', default: false })
    isCorrect: boolean;

    @ManyToOne(() => AsvabQuestion, (question) => question.answers, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'question_id' })
    question: AsvabQuestion;
}

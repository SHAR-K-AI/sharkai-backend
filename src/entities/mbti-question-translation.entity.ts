import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from 'typeorm';
import { MbtiQuestion } from './mbti-question.entity';

@Entity('mbti_question_translations')
export class MbtiQuestionTranslation {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => MbtiQuestion, question => question.translations, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'question_id' })
    question: MbtiQuestion;

    @Column()
    locale: string;

    @Column('text')
    text: string;
}

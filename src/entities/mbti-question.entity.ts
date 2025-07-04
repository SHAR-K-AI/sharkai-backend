import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    ManyToOne,
    JoinColumn,
    PrimaryGeneratedColumn,
    OneToMany
} from 'typeorm';
import { MbtiTest } from './mbti-test.entity';
import {MbtiQuestionTranslation} from "./mbti-question-translation.entity";
import {MbtiOption} from "./mbti-option.entity";

export enum MbtiDimension {
    EI = 'EI', // Extroversion - Introversion
    SN = 'SN', // Sensing - Intuition
    TF = 'TF', // Thinking - Feeling
    JP = 'JP', // Judging - Perceiving
}

@Entity('mbti_questions')
export class MbtiQuestion {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('char')
    test_id: string;

    @ManyToOne(() => MbtiTest, test => test.questions, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'test_id' })
    test: MbtiTest;

    @Column({ nullable: true, type: 'text' })
    text: string;

    @CreateDateColumn()
    created_at: Date;

    @OneToMany(() => MbtiQuestionTranslation, t => t.question, { cascade: true })
    translations: MbtiQuestionTranslation[];

    @OneToMany(() => MbtiOption, (o) => o.question)
    options: MbtiOption[];

}

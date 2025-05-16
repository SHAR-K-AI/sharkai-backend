import {Entity, PrimaryColumn, Column, CreateDateColumn, ManyToOne, JoinColumn, PrimaryGeneratedColumn} from 'typeorm';
import { MbtiTest } from './mbti-test.entity';

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

    @Column('char', { length: 36 })
    test_id: string;

    @ManyToOne(() => MbtiTest, test => test.questions, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'test_id' })
    test: MbtiTest;

    @Column('text')
    text: string;

    @Column()
    dimension: string;

    @CreateDateColumn()
    created_at: Date;
}

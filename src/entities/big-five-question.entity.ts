// src/entities/big-five-question.entity.ts
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { BigFiveTest } from './big-five-test.entity';

export enum BigFiveFactor {
    O = 'O', // Openness
    C = 'C', // Conscientiousness
    E = 'E', // Extraversion
    A = 'A', // Agreeableness
    N = 'N', // Neuroticism
}

@Entity('big_five_questions')
export class BigFiveQuestion {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text' })
    text: string;

    @Column({ type: 'varchar', length: 2 })
    factor: 'O' | 'C' | 'E' | 'A' | 'N';

    @ManyToOne(() => BigFiveTest, (test) => test.questions, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'test_id' })
    test: BigFiveTest;
}

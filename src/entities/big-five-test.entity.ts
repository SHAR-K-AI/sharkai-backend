// src/entities/big-five-test.entity.ts
import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    OneToMany, PrimaryGeneratedColumn,
} from 'typeorm';
import { BigFiveQuestion } from './big-five-question.entity';

@Entity('big_five_tests')
export class BigFiveTest {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 255 })
    title: string;

    @Column({ type: 'text', nullable: true })
    description?: string;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;

    @OneToMany(() => BigFiveQuestion, (question) => question.test, {
        cascade: true,
    })
    questions: BigFiveQuestion[];
}

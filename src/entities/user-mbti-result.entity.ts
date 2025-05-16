// src/mbti/entities/user-mbti-result.entity.ts
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, JoinColumn} from 'typeorm';
import { MbtiTest } from './mbti-test.entity';
import {User} from "./user.entity";

@Entity('user_mbti_results')
export class UserMbtiResult {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, { eager: true, onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => MbtiTest, { eager: true, onDelete: 'CASCADE' })
    @JoinColumn({ name: 'test_id' })
    test: MbtiTest;

    @Column({ name: 'result_type' })
    result: string;

    @Column({ type: 'json' })
    answers: Record<string, boolean>;
}

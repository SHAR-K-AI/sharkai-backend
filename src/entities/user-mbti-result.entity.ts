// src/mbti/entities/user-mbti-result.entity.ts
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
    JoinColumn,
    ManyToMany,
    JoinTable
} from 'typeorm';
import { MbtiTest } from './mbti-test.entity';
import {User} from "./user.entity";
import {MbtiQuestion} from "./mbti-question.entity";

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

    @Column({ type: 'json' })
    result: Record<string, boolean>;

    @Column({ name: 'created_at' })
    createdAt: Date;
}

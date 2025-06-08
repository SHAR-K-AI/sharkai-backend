import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import {User} from "./user.entity";
import {Test} from "./test.entity";

@Entity('user_test_passages')
export class UserTestPassage {
    @PrimaryColumn()
    userId: number;

    @PrimaryColumn()
    testId: string;

    @CreateDateColumn({ type: 'timestamp' })
    passedAt: Date;

    @Column({ type: 'float', nullable: true })
    score?: number;

    @ManyToOne(() => User, (user) => user.testPassages, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'userId' })
    user: User;

    @ManyToOne(() => Test, (test) => test.userPassages, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'testId' })
    test: Test;
}

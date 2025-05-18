import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import {User} from "./user.entity";

@Entity('career_find')
export class CareerFind {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number;

    @ManyToOne(() => User, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column()
    education_level: string;

    @Column()
    age_group: string;

    @Column()
    interest_area: string;

    @Column('text')
    test_preferences: string; // JSON.stringify([...])

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;
}

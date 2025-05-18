import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { User } from "./user.entity";

@Entity('career_upgrade')
export class CareerUpgrade {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number;

    @ManyToOne(() => User, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column()
    current_position: string;

    @Column()
    industry: string;

    @Column()
    goal: string;

    @Column('text')
    skills_to_improve: string; // JSON.stringify([...])

    @Column('text', { nullable: true })
    courses_taken: string;

    @Column()
    available_hours: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;
}

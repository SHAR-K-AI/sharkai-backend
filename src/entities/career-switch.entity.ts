import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./user.entity";

@Entity('career_switch')
export class CareerSwitch {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number;

    @ManyToOne(() => User, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column()
    current_profession: string;

    @Column()
    reason_to_change: string;

    @Column()
    target_area: string;

    @Column('text')
    existing_skills: string; // JSON.stringify([...])

    @Column()
    ready_to_learn: boolean;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;
}

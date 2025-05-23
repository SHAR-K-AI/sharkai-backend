import {
    Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn, ManyToMany,
} from 'typeorm';
import { EnvironmentTypeTranslation } from './environment-type-translation.entity';
import {User} from "./user.entity";

@Entity('environment_types')
export class EnvironmentType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    category: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(() => EnvironmentTypeTranslation, (t) => t.environment, { cascade: true })
    translations: EnvironmentTypeTranslation[];

    @ManyToMany(() => User, (user) => user.environmentTypes)
    users: User[];
}

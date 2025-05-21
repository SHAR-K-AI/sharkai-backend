import {
    Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn,
} from 'typeorm';
import { EnvironmentTypeTranslation } from './environment-type-translation.entity';

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
}

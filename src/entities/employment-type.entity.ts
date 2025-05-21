import {
    Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn,
} from 'typeorm';
import { EmploymentTypeTranslation } from './employment-type-translation.entity';

@Entity('employment_types')
export class EmploymentType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    category: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(() => EmploymentTypeTranslation, (t) => t.type, { cascade: true })
    translations: EmploymentTypeTranslation[];
}

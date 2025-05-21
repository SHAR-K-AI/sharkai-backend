import {
    Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn,
} from 'typeorm';
import { EmploymentType } from './employment-type.entity';

@Entity('employment_types_translations')
export class EmploymentTypeTranslation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'language_code', length: 5})
    languageCode: string;

    @Column()
    field: string;

    @Column('text')
    value: string;

    @ManyToOne(() => EmploymentType, (type) => type.translations, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'employment_type_id' })
    type: EmploymentType;
}

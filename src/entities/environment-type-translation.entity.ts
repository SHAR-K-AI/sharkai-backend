import {
    Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn,
} from 'typeorm';
import { EnvironmentType } from './environment-type.entity';

@Entity('environment_types_translations')
export class EnvironmentTypeTranslation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'language_code', length: 5})
    languageCode: string;

    @Column()
    field: string;

    @Column('text')
    value: string;

    @ManyToOne(() => EnvironmentType, (environment) => environment.translations, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'environment_id' })
    environment: EnvironmentType;
}

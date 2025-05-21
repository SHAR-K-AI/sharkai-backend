import {
    Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn,
} from 'typeorm';
import { Principle } from './principle.entity';
import {Interest} from "./interest.entity";

@Entity('principles_translations')
export class PrincipleTranslation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'language_code', length: 5})
    languageCode: string;

    @Column()
    field: string;

    @Column('text')
    value: string;

    @ManyToOne(() => Principle, (principle) => principle.translations, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'principle_id' })
    principle: Interest;

}

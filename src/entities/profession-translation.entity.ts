import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { Profession } from './profession.entity';

@Entity('professions_translations')
export class ProfessionTranslation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    profession_id: number;

    @ManyToOne(() => Profession, profession => profession.translations, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'profession_id' })
    profession: Profession;

    @Column({name: 'language_code', length: 5})
    languageCode: string;

    @Column()
    field: string;

    @Column('text')
    value: string;
}

import {
    Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn,
} from 'typeorm';
import { Interest } from './interest.entity';

@Entity('interests_translations')
export class InterestTranslation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'language_code', length: 5})
    languageCode: string;

    @Column()
    field: string;

    @Column('text')
    value: string;

    @ManyToOne(() => Interest, (interest) => interest.translations, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'interest_id' })
    interest: Interest;
}

import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn, OneToMany,
} from 'typeorm';
import { Publication } from './publication.entity';

@Entity('publications_translations')
export class PublicationTranslation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    publication_id: number;

    @Column({ name: "language_code", length: 5 })
    languageCode: string;

    @Column()
    field: string;

    @Column('text')
    value: string;

    @ManyToOne(() => Publication, (pub) => pub.translations, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'publication_id' })
    publication: Publication;
}

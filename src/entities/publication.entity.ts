import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { PublicationTranslation } from './publication-translation.entity';
import {ProfessionCategory} from "./profession-category.entity";

@Entity('publications')
export class Publication {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    slug: string;

    @Column({ nullable: true })
    profession_code: string;

    @Column({ type: 'timestamp', nullable: true })
    published_at: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(() => PublicationTranslation, (t) => t.publication, {
        cascade: true,
    })
    translations: PublicationTranslation[];

    @ManyToOne(() => ProfessionCategory, (category) => category.publications, {
        nullable: true,
        onDelete: 'SET NULL',
    })
    @JoinColumn({ name: 'profession_code' })
    professionCategory: ProfessionCategory;
}

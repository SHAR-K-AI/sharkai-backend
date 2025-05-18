import {
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany, JoinColumn
} from 'typeorm';

import {ProfessionCategory} from './profession-category.entity';
import {ProfessionTranslation} from './profession-translation.entity';

@Entity('professions')
export class Profession {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => ProfessionCategory, category => category.professions, {nullable: true, onDelete: 'SET NULL'})
    @JoinColumn({name: 'category_id'})
    category: ProfessionCategory;

    @Column({type: 'json', nullable: true})
    mbti: any;

    @Column({type: 'json', nullable: true})
    riasec: any;

    @Column({type: 'json', nullable: true})
    gallup: any;

    @Column({type: 'json', nullable: true})
    bigFiveIdeal: any;

    @Column({type: 'json', nullable: true})
    asvab: any;

    @Column({name: "salary_range", type: 'json', nullable: true})
    salaryRange: any;

    @Column({type: 'int', default: 0})
    demand: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(() => ProfessionTranslation, translation => translation.profession, {cascade: true})
    translations: ProfessionTranslation[];
}

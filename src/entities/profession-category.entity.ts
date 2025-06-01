import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
} from "typeorm";
import { ProfessionCategoryTranslation } from "./profession-category-translation.entity";
import {Profession} from "./profession.entity";
import {Publication} from "./publication.entity";

@Entity("profession_categories")
export class ProfessionCategory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    level: string;

    @Column({ unique: true })
    code: string;

    @CreateDateColumn({ type: "timestamp" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updated_at: Date;

    @OneToMany(() => ProfessionCategoryTranslation, (translation) => translation.category, {
        cascade: true,
    })
    translations: ProfessionCategoryTranslation[];

    @OneToMany(() => Profession, profession => profession.category)
    professions: Profession[];

    @OneToMany(() => Publication, (pub) => pub.professionCategory)
    publications: Publication[];

}

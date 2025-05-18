import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from "typeorm";
import { Skill } from "./skill.entity";

@Entity("skills_translations")
export class SkillTranslation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    skill_id: number;

    @Column({name: 'language_code', length: 5})
    languageCode: string;

    @Column()
    field: string;

    @Column("text")
    value: string;

    @ManyToOne(() => Skill, (skill) => skill.translations, {
        onDelete: "CASCADE",
    })
    @JoinColumn({ name: "skill_id" })
    skill: Skill;
}

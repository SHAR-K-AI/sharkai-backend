import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
} from "typeorm";
import { SkillTranslation } from "./skill-translation.entity";

@Entity("skills")
export class Skill {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    category: string;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @OneToMany(() => SkillTranslation, (translation) => translation.skill, {
        cascade: true,
    })
    translations: SkillTranslation[];
}

import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany, ManyToMany,
} from "typeorm";
import { SkillTranslation } from "./skill-translation.entity";
import {User} from "./user.entity";

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

    @ManyToMany(() => User, user => user.skills)
    users: User[];
}

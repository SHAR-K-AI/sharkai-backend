import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Profession } from "./profession.entity";

@Entity('isco_categories')
export class IscoCategory {
    @PrimaryGeneratedColumn("uuid")
    code: string;

    @Column("varchar", { length: 255 })
    title: string;

    @Column("text", { nullable: true })
    definition: string;

    @Column("int")
    level: number;

    @OneToMany(() => Profession, (profession) => profession.category)
    professions: Profession[];
}

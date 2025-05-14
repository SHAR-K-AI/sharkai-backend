// src/entity/Category.ts
import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    OneToMany, PrimaryGeneratedColumn,
} from "typeorm";
import { Profession } from "./profession.entity";
import {User} from "./user.entity";
import {Test} from "./test.entity";


@Entity("categories")
export class Category {
    @PrimaryGeneratedColumn()
    category_id: number;

    @Column({ type: "varchar", length: 255 })
    title: string;

    @Column({ type: "text", nullable: true })
    description?: string;

    @CreateDateColumn()
    created_at: Date;

    // Зв’язок з професіями
    @OneToMany(() => Profession, (profession) => profession.category)
    professions: Profession[];

    // Зв’язок з тестами
    @OneToMany(() => Test, (test) => test.category)
    tests: Test[];

    // Зв’язок з користувачами (якщо потрібно зберігати категорії, які вподобав юзер)
    @OneToMany(() => User, (user) => user.category)
    users: User[];
}

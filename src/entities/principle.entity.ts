import {
    Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn, ManyToMany,
} from 'typeorm';
import {PrincipleTranslation} from "./principle-translation.entity";
import {User} from "./user.entity";

@Entity('principles')
export class Principle {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    category: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(() => PrincipleTranslation, translation => translation.principle, { cascade: true })
    translations: PrincipleTranslation[];

    @ManyToMany(() => User, (user) => user.principles)
    users: User[];

}

import {
    Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn,
} from 'typeorm';
import {PrincipleTranslation} from "./principle-translation.entity";

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

    @OneToMany(() => PrincipleTranslation, (translation) => translation.value, { cascade: true })
    translations: PrincipleTranslation[];
}

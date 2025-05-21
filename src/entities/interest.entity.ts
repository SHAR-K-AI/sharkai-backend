import {
    Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany,
} from 'typeorm';
import { InterestTranslation } from './interest-translation.entity';

@Entity('interests')
export class Interest {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    category: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(() => InterestTranslation, (t) => t.interest, { cascade: true })
    translations: InterestTranslation[];
}

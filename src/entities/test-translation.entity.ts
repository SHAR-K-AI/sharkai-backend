import {
    Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn
} from 'typeorm';
import {Test} from "./test.entity";

@Entity('test_translations')
export class TestTranslation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'language', type: 'varchar', length: 5 })
    language: string;

    @Column()
    title: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @ManyToOne(() => Test, test => test.translations, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'test_id' })
    test: Test;
}

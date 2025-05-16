import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { AsvabQuestion } from './asvab-question.entity';

@Entity('asvab_tests')
export class AsvabTest {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @OneToMany(() => AsvabQuestion, (question) => question.test, { cascade: true })
    questions: AsvabQuestion[];
}

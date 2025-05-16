import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { MbtiQuestion } from './mbti-question.entity';

@Entity('mbti_tests')
export class MbtiTest {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column({ nullable: true })
    description?: string;

    @OneToMany(() => MbtiQuestion, question => question.test, { cascade: true })
    questions: MbtiQuestion[];
}

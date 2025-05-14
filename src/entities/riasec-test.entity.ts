// src/riasec/entities/riasec-test.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { RiasecQuestion } from './riasec-question.entity';

@Entity('riasec_tests')
export class RiasecTest {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({ nullable: true })
    description: string;

    @OneToMany(() => RiasecQuestion, (q) => q.test)
    questions: RiasecQuestion[];
}

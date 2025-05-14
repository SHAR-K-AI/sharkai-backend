// src/riasec/entities/riasec-question.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { RiasecTest } from './riasec-test.entity';

export enum RiasecType {
    R = 'R',
    I = 'I',
    A = 'A',
    S = 'S',
    E = 'E',
    C = 'C',
}

@Entity('riasec_questions')
export class RiasecQuestion {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    text: string;

    @Column({
        type: 'enum',
        enum: RiasecType, // Використовуємо enum для типу
    })
    type: RiasecType;

    @Column({ default: true })
    isActive: boolean;

    @ManyToOne(() => RiasecTest, (test) => test.questions, { onDelete: 'CASCADE' })
    test: RiasecTest;

    @Column()
    testId: number;
}

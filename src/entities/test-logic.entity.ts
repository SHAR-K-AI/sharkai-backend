import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Test } from './test.entity';

@Entity('test_logic')
export class TestLogic {
    @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
    logic_id: number;

    @Column({ type: 'varchar', length: 100 })
    category: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column({ type: 'text', nullable: true })
    recommendation: string;

    @Column({ type: 'bigint', unsigned: true })
    test_id: number;

    @ManyToOne(() => Test, test => test.logic, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'test_id' })
    test: Test;
}

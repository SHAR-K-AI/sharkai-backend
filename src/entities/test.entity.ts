import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn} from 'typeorm';
import { TestQuestion } from './test-question.entity';
import {TestLogic} from "./test-logic.entity";
import {Category} from "./career-category.entity";

@Entity('tests')
export class Test {
    @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
    test_id: number;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column({ type: 'varchar', length: 50 })
    test_type: 'personality' | 'interest' | 'skills';

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @OneToMany(() => TestQuestion, question => question.test)
    questions: TestQuestion[];

    @OneToMany(() => TestLogic, logic => logic.test)
    logic: TestLogic[];

    @ManyToOne(() => Category, (category) => category.tests)
    @JoinColumn({ name: "category_id" })
    category: Category;

    @Column({ type: "varchar", length: 100 })
    category_code: string;
}

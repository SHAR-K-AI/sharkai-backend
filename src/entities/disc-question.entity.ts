import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from 'typeorm';
import { DiscTest } from './disc-test.entity';

export enum DiscStyle {
    D = 'D',
    I = 'I',
    S = 'S',
    C = 'C',
}

@Entity('disc_questions')
export class DiscQuestion {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @Column({ type: 'enum', enum: DiscStyle })
    style: DiscStyle;

    @ManyToOne(() => DiscTest, test => test.questions, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'test_id' })
    test: DiscTest;

}

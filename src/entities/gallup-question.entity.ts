import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import { GallupTest } from './gallup-test.entity';

@Entity('gallup_questions')
export class GallupQuestion {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'left_statement', type: 'text' })
    leftStatement: string;

    @Column({ name: 'right_statement', type: 'text' })
    rightStatement: string;

    @ManyToOne(() => GallupTest, (test) => test.questions, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'test_id' })
    test: GallupTest;
}

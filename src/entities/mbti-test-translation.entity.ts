import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from 'typeorm';
import { MbtiTest } from './mbti-test.entity';

@Entity('mbti_test_translations')
export class MbtiTestTranslation {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => MbtiTest, test => test.translations, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'test_id' })
    test: MbtiTest;

    @Column()
    locale: string;

    @Column()
    title: string;

    @Column('text', { nullable: true })
    description: string;
}

import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { MbtiQuestion } from './mbti-question.entity';
import {MbtiTestTranslation} from "./mbti-test-translation.entity";

@Entity('mbti_tests')
export class MbtiTest {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: true })
    title: string;

    @Column({ nullable: true })
    description?: string;

    @OneToMany(() => MbtiQuestion, question => question.test, { cascade: true })
    questions: MbtiQuestion[];

    @OneToMany(() => MbtiTestTranslation, t => t.test)
    translations: MbtiTestTranslation[];

}

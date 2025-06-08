import { Entity, PrimaryColumn, Column, ManyToOne, OneToMany, JoinColumn, CreateDateColumn } from 'typeorm';
import {MbtiQuestion} from "./mbti-question.entity";
import {MbtiOptionTranslation} from "./mbti-option-translation.entity";

@Entity('mbti_options')
export class MbtiOption {
    @PrimaryColumn('char')
    id: string;

    @Column({ name: 'question_id', type: 'char' })
    questionId: string;

    @Column()
    dimension: string;

    @Column({ name: 'img_src', nullable: true })
    imgSrc?: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @ManyToOne(() => MbtiQuestion, (q) => q.options, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'question_id' })
    question: MbtiQuestion;

    @OneToMany(() => MbtiOptionTranslation, (t) => t.option)
    translations: MbtiOptionTranslation[];
}

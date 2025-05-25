import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import {MbtiOption} from "./mbti-option.entity";

@Entity('mbti_option_translations')
export class MbtiOptionTranslation {
    @PrimaryColumn('char', { length: 36 })
    id: string;

    @Column({ name: 'option_id', type: 'char', length: 36 })
    optionId: string;

    @Column()
    locale: string;

    @Column({ type: 'text', nullable: true })
    text?: string;

    @Column({ type: 'text', nullable: true })
    description?: string;

    @ManyToOne(() => MbtiOption, (o) => o.translations, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'option_id' })
    option: MbtiOption;
}

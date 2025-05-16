import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { GallupQuestion } from './gallup-question.entity';

@Entity('gallup_tests')
export class GallupTest {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({ nullable: true })
    description: string;

    @OneToMany(() => GallupQuestion, (question) => question.test, { cascade: true })
    questions: GallupQuestion[];
}

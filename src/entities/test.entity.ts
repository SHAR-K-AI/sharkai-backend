import {
    Entity,
    PrimaryColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
} from 'typeorm';
import { TestTranslation } from './test-translation.entity';
import { TestQuestion } from './test-question.entity';

@Entity('tests')
export class Test {
    @PrimaryColumn({ type: 'varchar', length: 36 })
    id: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @OneToMany(() => TestTranslation, translation => translation.test, { cascade: true })
    translations: TestTranslation[];

    @OneToMany(() => TestQuestion, question => question.test, { cascade: true })
    questions: TestQuestion[];
}

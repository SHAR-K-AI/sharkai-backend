import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from "typeorm";
import {ProfessionCategory} from "./profession-category.entity";

@Entity("profession_categories_translations")
export class ProfessionCategoryTranslation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    category_id: number;

    @Column({name: 'language_code', length: 5})
    languageCode: string;

    @Column()
    field: string;

    @Column("text")
    value: string;

    @ManyToOne(() => ProfessionCategory, (category) => category.translations, {
        onDelete: "CASCADE",
    })
    @JoinColumn({name: "category_id"})
    category: ProfessionCategory;
}

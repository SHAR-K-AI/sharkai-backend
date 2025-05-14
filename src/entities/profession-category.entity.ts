import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('profession_categories')
export class ProfessionCategory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'name_ua' })
    nameUa: string;

    @Column({ name: 'name_en' })
    nameEn: string;

    @Column({  name: 'description_ua', type: 'text', nullable: true })
    descriptionUa?: string;

    @Column({ name: 'description_en', type: 'text', nullable: true })
    descriptionEn?: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}

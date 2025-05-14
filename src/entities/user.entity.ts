import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    JoinTable,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne, JoinColumn,
} from 'typeorm';
import { Role } from './roles.entity';
import { Category } from './career-category.entity';

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;

    @Column()
    name: string;

    @Column({ nullable: true }) // null якщо Google/Facebook
    password: string;

    @Column({ nullable: true }) // наприклад: google ID або facebook ID
    oauth_id: string;

    @Column({ nullable: true }) // "google" | "facebook" | null
    provider: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @ManyToMany(() => Role)
    @JoinTable({
        name: 'users_roles',
        joinColumn: { name: 'user_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'role_id', referencedColumnName: 'id' },
    })
    roles: Role[];

    @ManyToOne(() => Category, (category) => category.users)
    @JoinColumn({ name: "category_id" })
    category: Category;

    @Column({ type: "varchar", length: 100, nullable: true })
    category_code: string;
}

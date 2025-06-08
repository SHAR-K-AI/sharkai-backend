import { User } from './user.entity';
import {Publication} from "./publication.entity";
import { Entity, ManyToOne, JoinColumn, PrimaryColumn, CreateDateColumn } from 'typeorm';

@Entity('user_read_publications')
export class UserReadPublication {
    @PrimaryColumn()
    user_id: number;

    @PrimaryColumn()
    publication_id: number;

    @CreateDateColumn({ type: 'timestamp' })
    read_at: Date;

    @ManyToOne(() => User, (user) => user.readPublications, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => Publication, (publication) => publication.userReads, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'publication_id' })
    publication: Publication;
}

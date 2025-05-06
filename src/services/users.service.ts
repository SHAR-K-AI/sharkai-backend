// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from "../entities/user.entity";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    async findOne(id: number): Promise<User | undefined> {
        return this.usersRepository.findOne({ where: { id } });
    }

    // Знаходимо користувача за email
    async findOneByEmail(email: string): Promise<User | undefined> {
        return this.usersRepository.findOne({ where: { email } });
    }

    // Створюємо OAuth користувача
    async createOAuthUser(oauthId: string, email: string, name: string, provider: string): Promise<User> {
        const user = new User();
        user.oauth_id = oauthId;
        user.email = email;
        user.name = name;
        user.provider = provider;
        return this.usersRepository.save(user);
    }

    // Знаходимо користувача за OAuthId
    async findByOAuthId(oauthId: string, provider: string): Promise<User | undefined> {
        return this.usersRepository.findOne({ where: { oauth_id: oauthId, provider } });
    }

    // Створюємо локального користувача (email + password)
    async create(email: string, password: string, name: string): Promise<User> {
        const user = new User();
        user.email = email;
        user.name = name;
        // Хешуємо пароль перед збереженням
        user.password = await bcrypt.hash(password, 10);
        return this.usersRepository.save(user);
    }
}

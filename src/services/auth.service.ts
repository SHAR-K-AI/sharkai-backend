// src/services/auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from './users.service';
import {User} from "../entities/user.entity";

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {}

    async getUserById(id: number): Promise<User> {
        return await this.usersService.findOne(id);
    }

    // Логіка входу користувача
    async login(user: any) {
        const payload = { sub: user.id, email: user.email, roles: user.roles };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    // Валідація OAuth користувача (Facebook, Google)
    async validateOAuthUser(oauthId: string, email: string, provider: string) {
        const user = await this.usersService.findByOAuthId(oauthId, provider);
        if (user) {
            return user;
        }
        return null;
    }

    // Створення нового OAuth користувача
    async createOAuthUser(oauthId: string, email: string, name: string, provider: string) {
        const newUser = await this.usersService.createOAuthUser(oauthId, email, name, provider);
        return newUser;
    }

    // Валідація локального користувача (email та password)
    async validateUser(email: string, password: string): Promise<any> {
        console.log('Validating user...');
        const user = await this.usersService.findOneByEmail(email);
        if (user) {
            const isPasswordValid = await bcrypt.compare(password, user.password);
            console.log('Password valid:', isPasswordValid);
            if (isPasswordValid) {
                return user;
            }
        }
        return null;
    }

    // Реєстрація локального користувача (email та password)
    async register(email: string, password: string, name: string): Promise<any> {
        // Перевіряємо чи існує вже користувач з таким email
        const existingUser = await this.usersService.findOneByEmail(email);
        if (existingUser) {
            throw new Error('User already exists');
        }

        // Створюємо нового користувача
        const newUser = await this.usersService.create(email, password, name);

        return newUser;
    }
}

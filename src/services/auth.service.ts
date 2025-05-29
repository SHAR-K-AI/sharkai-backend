import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from './users.service';
import { User } from '../entities/user.entity';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {}

    async getUserById(id: number): Promise<User> {
        return this.usersService.findOne(id);
    }

    private async generateTokens(user: User) {
        const payload = {
            sub: user.id,
            email: user.email,
            roles: user.roles,
        };

        const accessToken = this.jwtService.sign(payload, {
            secret: process.env.JWT_ACCESS_SECRET,
            expiresIn: '15m',
        });

        const refreshToken = this.jwtService.sign(payload, {
            secret: process.env.JWT_REFRESH_SECRET,
            expiresIn: '7d',
        });

        return { accessToken, refreshToken };
    }

    async login(user: User) {
        const { accessToken, refreshToken } = await this.generateTokens(user);

        const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);
        console.log("hashedRefreshToken",hashedRefreshToken)
        await this.usersService.update(user.id, { refreshToken: hashedRefreshToken });

        const updatedUser = await this.usersService.findOne(user.id);
        console.log("updatedUser",updatedUser)

        return {
            expires_in: 15 * 60, // 15 min or 900 sec
            access_token: accessToken,
            refresh_token: refreshToken
        };
    }

    async refreshToken(refreshToken: string): Promise<{ access_token: string; refresh_token: string, expires_in: number }> {
        try {
            if (!refreshToken) {
                throw new UnauthorizedException('No refresh token provided');
            }

            const payload = this.jwtService.verify(refreshToken, {
                secret: process.env.JWT_REFRESH_SECRET,
            });

            const user = await this.usersService.findOne(payload.sub);

            if (!user || !user.refreshToken) {
                throw new UnauthorizedException('Invalid refresh token (user not found or no token stored)');
            }
            console.log('Original refreshToken from request:', refreshToken);
            console.log('Stored hashed refreshToken:', user.refreshToken);
            const isTokenValid = await bcrypt.compare(refreshToken, user.refreshToken);

            if (!isTokenValid) {
                throw new UnauthorizedException('Refresh token does not match');
            }

            const { accessToken, refreshToken: newRefreshToken } = await this.generateTokens(user);
            const hashedNewRefreshToken = await bcrypt.hash(newRefreshToken, 10);

            await this.usersService.update(user.id, {
                refreshToken: hashedNewRefreshToken,
            });

            return {
                expires_in: 15 * 60, // 15 min or 900 sec
                access_token: accessToken,
                refresh_token: newRefreshToken
            };
        } catch (err) {
            console.error('Refresh error:', err?.message || err);
            throw new UnauthorizedException('Refresh token is invalid or expired');
        }
    }

    async logout(userId: number): Promise<void> {
        await this.usersService.update(userId, {
            refreshToken: null,
        });
    }

    async validateUser(email: string, password: string): Promise<User | null> {
        const user = await this.usersService.findOneByEmail(email);
        if (!user) return null;

        const isPasswordValid = await bcrypt.compare(password, user.password);
        return isPasswordValid ? user : null;
    }

    async register(email: string, password: string, name: string): Promise<User> {
        const existingUser = await this.usersService.findOneByEmail(email);
        if (existingUser) {
            throw new Error('User already exists');
        }

        return this.usersService.create(email, password, name);
    }

    async validateOAuthUser(oauthId: string, email: string, provider: string): Promise<User | null> {
        return this.usersService.findByOAuthId(oauthId, provider);
    }

    async createOAuthUser(oauthId: string, email: string, name: string, provider: string): Promise<User> {
        return this.usersService.createOAuthUser(oauthId, email, name, provider);
    }
}

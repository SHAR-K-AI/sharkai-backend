// src/auth/jwt.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import {AuthService} from "../services/auth.service";

export interface JwtPayload {
    sub: number; // id користувача, зазвичай у полі "sub"
    email?: string; // Можеш додавати інші поля, якщо вони є в токені
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'jwt-secret',  // Заміни на реальний секретний ключ
        });
    }

    async validate(payload: JwtPayload) {
        return await this.authService.getUserById(payload.sub);
    }
}

// src/auth/google.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import {AuthService} from "../services/auth.service";

@Injectable()
export class GoogleAuthStrategy extends PassportStrategy(GoogleStrategy, 'google') {
    constructor(private authService: AuthService) {
        super({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK_URL,
            scope: ['email', 'profile'],
        });
    }

    async validate(accessToken: string, refreshToken: string, profile: any) {
        const { id, emails, displayName } = profile;
        const user = await this.authService.validateOAuthUser(id, emails[0].value, 'google');
        if (!user) {
            return await this.authService.createOAuthUser(id, emails[0].value, displayName, 'google');
        }
        return user;
    }
}

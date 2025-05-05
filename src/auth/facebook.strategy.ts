// src/auth/facebook.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import {AuthService} from "../services/auth.service";

@Injectable()
export class FacebookAuthStrategy extends PassportStrategy(FacebookStrategy, 'facebook') {
    constructor(private authService: AuthService) {
        super({
            clientID: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
            callbackURL: process.env.FACEBOOK_CALLBACK_URL,
            profileFields: ['id', 'emails', 'name'],
        });
    }

    async validate(accessToken: string, refreshToken: string, profile: any) {
        const { id, emails, name } = profile;
        const user = await this.authService.validateOAuthUser(id, emails[0].value, 'facebook');
        if (!user) {
            return await this.authService.createOAuthUser(id, emails[0].value, name.givenName, 'facebook');
        }
        return user;
    }
}

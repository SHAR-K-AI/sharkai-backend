// src/auth/auth.controller.ts
import { Controller, Get, Post, UseGuards, Req, Body } from '@nestjs/common';
import { LocalAuthGuard } from "../auth/local-auth.guard";
import { GoogleAuthGuard } from "../auth/google-auth.guard";
import { FacebookAuthGuard } from "../auth/facebook-auth.guard";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { AuthService } from "../services/auth.service";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    // Маршрут для реєстрації локального користувача
    @Post('register')
    async register(
        @Body() body: { email: string; password: string; name: string }
    ) {
        const { email, password, name } = body;
        return this.authService.register(email, password, name);
    }

    // Логіка для входу користувача (за допомогою локальної аутентифікації)
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Req() req) {
        return this.authService.login(req.user);
    }

    @Post('refresh')
    async refresh(@Body('refreshToken') refreshToken: string) {
        return this.authService.refreshToken(refreshToken);
    }


    // Маршрут для Google аутентифікації
    @UseGuards(GoogleAuthGuard)
    @Get('google')
    googleAuth() {}

    // Маршрут для Google redirect
    @UseGuards(GoogleAuthGuard)
    @Get('google/redirect')
    googleAuthRedirect(@Req() req) {
        return this.authService.login(req.user);
    }

    // Маршрут для Facebook аутентифікації
    @UseGuards(FacebookAuthGuard)
    @Get('facebook')
    facebookAuth() {}

    // Маршрут для Facebook redirect
    @UseGuards(FacebookAuthGuard)
    @Get('facebook/redirect')
    facebookAuthRedirect(@Req() req) {
        return this.authService.login(req.user);
    }

    // Маршрут для отримання профілю користувача після авторизації
    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Req() req) {
        return req.user;
    }
}

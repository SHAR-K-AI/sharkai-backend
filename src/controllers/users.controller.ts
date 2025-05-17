// src/users/users.controller.ts
import {Controller, Get, Param, Req, UseGuards} from '@nestjs/common';
import {UsersService} from "../services/users.service";
import {User} from "../entities/user.entity";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @UseGuards(JwtAuthGuard)
    @Get('me')
    getMe(@Req() req): number {
        return req.user; // Тепер у req є користувач, отриманий з токену
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile/:id')
    async getUserProfile(@Param('id') id: number): Promise<User> {
        return this.usersService.getUserProfile(id);
    }
}

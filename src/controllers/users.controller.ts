// src/users/users.controller.ts
import {Controller, Get, Req, UseGuards} from '@nestjs/common';
import {UsersService} from "../services/users.service";
import {User} from "../entities/user.entity";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @UseGuards(JwtAuthGuard)
    @Get('me')
    getMe(@Req() req): number {
        console.log(req, "req")
        return req.user; // Тепер у req є користувач, отриманий з токену
    }
}

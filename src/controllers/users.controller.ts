// src/users/users.controller.ts
import {Controller, Get, Req} from '@nestjs/common';
import {UsersService} from "../services/users.service";

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get('me')
    async getProfile(@Req() req) {
        return this.usersService.findOneByEmail(req.user.email);
    }
}

import {
    Body,
    Controller,
    Get,
    Param,
    Patch,
    UseGuards,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { User } from '../entities/user.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UpdateUserDto } from '../dto/update-user.dto';
import { GetUser } from '../common/decorators/get-user.decorator';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @UseGuards(JwtAuthGuard)
    @Get('me')
    getMe(@GetUser() user: User): User {
        return user;
    }

    @UseGuards(JwtAuthGuard)
    @Patch('me')
    async updateOwnProfile(
        @GetUser('id') userId: number,
        @Body() dto: UpdateUserDto,
    ): Promise<User> {
        return this.usersService.updateProfile(userId, dto);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile/:id')
    async getUserProfile(@Param('id') id: number): Promise<User> {
        return this.usersService.getUserProfile(id);
    }


}

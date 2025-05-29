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
    async getMe(@GetUser() user: User): Promise<User> {
        return this.usersService.findOne(user.id);
    }

    @UseGuards(JwtAuthGuard)
    @Patch('me')
    async updateMe(
        @GetUser() user: User,
        @Body() dto: UpdateUserDto,
    ): Promise<User> {
        return this.usersService.update(user.id, dto);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    async getMeData(@GetUser() user: User): Promise<User> {
        return this.usersService.findOneWithRelations(user.id);
    }

}

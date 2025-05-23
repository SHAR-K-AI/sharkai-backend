// src/users/users.module.ts
import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {User} from "../entities/user.entity";
import {UsersController} from "../controllers/users.controller";
import {UsersService} from "../services/users.service";
import {EmploymentType} from "../entities/employment-type.entity";
import {Principle} from "../entities/principle.entity";
import {EnvironmentType} from "../entities/environment-type.entity";
import {EducationLevel} from "../entities/education-level.entity";
import {Skill} from "../entities/skill.entity";
import {Interest} from "../entities/interest.entity";

@Module({
    imports: [TypeOrmModule.forFeature([
        User,
        Skill,
        Interest,
        Principle,
        EmploymentType,
        EnvironmentType,
        EducationLevel,
    ]),],
    providers: [UsersService],
    controllers: [UsersController],
    exports: [UsersService],  // Експортуємо для використання в AuthService
})
export class UsersModule {
}

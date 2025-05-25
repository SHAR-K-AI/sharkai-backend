// src/users/users.service.ts
import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {In, Repository} from 'typeorm';
import * as bcrypt from 'bcrypt';
import {User} from "../entities/user.entity";
import {UpdateUserDto} from "../dto/update-user.dto";
import {EmploymentType} from "../entities/employment-type.entity";
import {EnvironmentType} from "../entities/environment-type.entity";
import {Principle} from 'src/entities/principle.entity';
import {EducationLevel} from "../entities/education-level.entity";
import {Skill} from 'src/entities/skill.entity';
import {Interest} from "../entities/interest.entity";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,

        @InjectRepository(Skill)
        private skillRepository: Repository<Skill>,

        @InjectRepository(Interest)
        private interestsRepository: Repository<Interest>,

        @InjectRepository(EducationLevel)
        private educationLevelsRepository: Repository<EducationLevel>,

        @InjectRepository(Principle)
        private principlesRepository: Repository<Principle>,

        @InjectRepository(EmploymentType)
        private employmentTypesRepository: Repository<EmploymentType>,

        @InjectRepository(EnvironmentType)
        private environmentTypesRepository: Repository<EnvironmentType>,
    ) {
    }

    async findOne(id: number): Promise<User | undefined> {
        return this.usersRepository.findOne({where: {id}});
    }

    async findOneWithRelations(id: number): Promise<User> {
        return this.usersRepository.findOne({
            where: {id},
            relations: [
                'skills', 'skills.translations',
                'interests', 'interests.translations',
                'principles', 'principles.translations',
                'educationLevels', 'educationLevels.translations',
                'employmentTypes', 'employmentTypes.translations',
                'environmentTypes', 'environmentTypes.translations',
                "learningPaths", "learningPaths.translations",
                "learningPaths.days", "learningPaths.days.translations",
                "mbtiResults"
            ]
        });
    }

    // Знаходимо користувача за email
    async findOneByEmail(email: string): Promise<User | undefined> {
        return this.usersRepository.findOne({where: {email}});
    }

    // Створюємо OAuth користувача
    async createOAuthUser(oauthId: string, email: string, name: string, provider: string): Promise<User> {
        const user = new User();
        user.oauth_id = oauthId;
        user.email = email;
        user.name = name;
        user.provider = provider;
        return this.usersRepository.save(user);
    }

    // Знаходимо користувача за OAuthId
    async findByOAuthId(oauthId: string, provider: string): Promise<User | undefined> {
        return this.usersRepository.findOne({where: {oauth_id: oauthId, provider}});
    }

    // Створюємо локального користувача (email + password)
    async create(email: string, password: string, name: string): Promise<User> {
        const user = new User();
        user.email = email;
        user.name = name;
        // Хешуємо пароль перед збереженням
        user.password = await bcrypt.hash(password, 10);
        return this.usersRepository.save(user);
    }

    async update(id: number, dto: UpdateUserDto) {
        const user = await this.usersRepository.findOne({
            where: {id},
            relations: [
                "skills",
                "interests",
                "principles",
                "educationLevels",
                "employmentTypes",
                "environmentTypes"
            ],
        });

        console.log(dto, "dtodtodtodto")

        if (!user) {
            throw new NotFoundException('User not found');
        }

        if (dto.skills?.length) {
            const skills = await this.skillRepository.find({
                where: {id: In(dto.skills.map(Number))},
            });
            user.skills = skills;
        }

        if (dto.interests?.length) {
            const interests = await this.interestsRepository.find({
                where: {id: In(dto.interests.map(Number))},
            });
            user.interests = interests;
        }

        if (dto.educationLevels?.length) {
            const educationLevels = await this.educationLevelsRepository.find({
                where: {id: In(dto.educationLevels.map(Number))},
            });
            user.educationLevels = educationLevels;
        }

        if (dto.principles?.length) {
            const principles = await this.principlesRepository.find({
                where: {id: In(dto.principles.map(Number))},
            });
            user.principles = principles;
        }

        if (dto.employmentTypes?.length) {
            const employmentTypes = await this.employmentTypesRepository.find({
                where: {id: In(dto.employmentTypes.map(Number))},
            });
            user.employmentTypes = employmentTypes;
        }

        if (dto.environmentTypes?.length) {
            const environmentTypes = await this.environmentTypesRepository.find({
                where: {id: In(dto.environmentTypes.map(Number))},
            });
            user.environmentTypes = environmentTypes;
        }

        Object.assign(user, {
            email: dto.email ?? user.email,
            name: dto.name ?? user.name,
            // dob: dto.dob ?? user.dob,
            education: dto.education ?? user.education,
        });


        await this.usersRepository.save(user);
        console.log(user)
        return user;
    }

    async getUserProfile(userId: number): Promise<User> {
        return this.usersRepository.findOne({
            where: {id: userId},
            relations: [
                'roles',
                'careerFinds',
                'mbtiResults',
                'mbtiResults.test.questions'
            ],
        });
    }
}

import {Injectable} from "@nestjs/common";
import {CareerFind} from "../entities/career-find.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {CreateCareerFindDto} from "../dto/career-find.dto";
import {Repository} from "typeorm";

@Injectable()
export class CareerFindService {
    constructor(
        @InjectRepository(CareerFind)
        private repo: Repository<CareerFind>,
    ) {}

    async create(userId: number, dto: CreateCareerFindDto) {
        const data = this.repo.create({
            ...dto,
            test_preferences: JSON.stringify(dto.test_preferences),
            user_id: userId,
        });
        return this.repo.save(data);
    }

    findAll() {
        return this.repo.find({ relations: ['user'] });
    }

    findOne(id: number) {
        return this.repo.findOne({ where: { id }, relations: ['user'] });
    }

    async remove(id: number) {
        return this.repo.delete(id);
    }
}

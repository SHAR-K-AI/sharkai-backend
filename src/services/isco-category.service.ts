import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {Injectable} from "@nestjs/common";
import { IscoCategory } from "src/entities/isco-category.entity";

@Injectable()
export class IscoCategoryService {
    constructor(
        @InjectRepository(IscoCategory)
        private professionRepo: Repository<IscoCategory>,
    ) {}

    async create(data: Partial<IscoCategory>): Promise<IscoCategory> {
        const newIscoCategory = this.professionRepo.create(data);
        return this.professionRepo.save(newIscoCategory);
    }

    async findAll(): Promise<IscoCategory[]> {
        return this.professionRepo.find();
    }

    // async findOne(id: string): Promise<IscoCategory> {
    //     return this.professionRepo.findOne({ where: { id } });
    // }

    // async update(id: string, data: Partial<IscoCategory>): Promise<IscoCategory> {
    //     await this.professionRepo.update(id, data);
    //     return this.findOne(id);
    // }

    async remove(id: string): Promise<void> {
        await this.professionRepo.delete(id);
    }
}

import {Profession} from "../entities/profession.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {Injectable} from "@nestjs/common";

@Injectable()
export class ProfessionService {
    constructor(
        @InjectRepository(Profession)
        private professionRepo: Repository<Profession>,
    ) {}

    async create(data: Partial<Profession>): Promise<Profession> {
        const newProfession = this.professionRepo.create(data);
        return this.professionRepo.save(newProfession);
    }

    async findAll(): Promise<Profession[]> {
        return this.professionRepo.find();
    }

    async findOne(id: string): Promise<Profession> {
        return this.professionRepo.findOne({ where: { id } });
    }

    async update(id: string, data: Partial<Profession>): Promise<Profession> {
        await this.professionRepo.update(id, data);
        return this.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.professionRepo.delete(id);
    }
}

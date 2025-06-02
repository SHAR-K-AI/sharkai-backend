import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {CreateTestDto} from "../dto/create-test.dto";
import {Test} from "../entities/test.entity";


@Injectable()
export class TestsService {
    constructor(
        @InjectRepository(Test) private readonly testRepo: Repository<Test>,
    ) {
    }

    create(dto: CreateTestDto) {
        const test = this.testRepo.create(dto);
        return this.testRepo.save(test);
    }

    findAll() {
        return this.testRepo.find();
    }

    findOne(id: string) {
        return this.testRepo.findOne({
            where: {id},
            relations: [
                'translations',
                'questions', 'questions.translations',
                'questions.options', 'questions.options.translations',
            ]
        });
    }

    async remove(id: string) {
        await this.testRepo.delete(id);
        return {deleted: true};
    }
}

import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import { Profession } from "../entities/profession.entity";
import {ProfessionController} from "../controllers/professions.controller";
import {ProfessionService} from "../services/professions.service";

@Module({
    imports: [TypeOrmModule.forFeature([Profession])],
    controllers: [ProfessionController],
    providers: [ProfessionService],
    exports: [ProfessionService],
})
export class ProfessionModule {}

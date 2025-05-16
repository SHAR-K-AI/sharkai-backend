import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {DiscTest} from "../entities/disc-test.entity";
import {DiscQuestion} from "../entities/disc-question.entity";
import {DiscController} from "../controllers/disc-test.controller";
import {DiscService} from "../services/disc-test.service";

@Module({
    imports: [TypeOrmModule.forFeature([DiscTest, DiscQuestion])],
    controllers: [DiscController],
    providers: [DiscService],
})
export class DiscModule {}


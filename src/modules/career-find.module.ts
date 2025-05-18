import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {CareerFind} from "../entities/career-find.entity";
import {CareerFindController} from "../controllers/career-find.controller";
import {CareerFindService} from "../services/career-find.service";

@Module({
    imports: [TypeOrmModule.forFeature([CareerFind])],
    controllers: [CareerFindController],
    providers: [CareerFindService],
})
export class CareerFindModule {}

import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {IscoCategory} from "../entities/isco-category.entity";
import {IscoCategoryService} from "../services/isco-category.service";
import {IscoCategoryController} from "../controllers/isco-category.controller";

@Module({
    imports: [TypeOrmModule.forFeature([IscoCategory])],
    controllers: [IscoCategoryController],
    providers: [IscoCategoryService],
    exports: [IscoCategoryService],
})
export class IscoCategoryModule {}

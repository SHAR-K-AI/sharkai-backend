import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body,
    ParseIntPipe,
} from "@nestjs/common";
import {SkillService} from "../services/skill.service";
import { Skill } from "src/entities/skill.entity";
import {CreateSkillDto} from "../dto/create-skill.dto";
import {UpdateSkillDto} from "../dto/update-skill.dto";


@Controller("skills")
export class SkillController {
    constructor(private readonly skillService: SkillService) {}

    @Post()
    create(@Body() createSkillDto: CreateSkillDto): Promise<Skill> {
        return this.skillService.create(createSkillDto);
    }

    @Get()
    findAll(): Promise<Skill[]> {
        return this.skillService.findAll();
    }

    @Get(":id")
    findOne(@Param("id", ParseIntPipe) id: number): Promise<Skill> {
        return this.skillService.findOne(id);
    }

    @Put(":id")
    update(
        @Param("id", ParseIntPipe) id: number,
        @Body() updateSkillDto: UpdateSkillDto,
    ): Promise<Skill> {
        return this.skillService.update(id, updateSkillDto);
    }

    @Delete(":id")
    remove(@Param("id", ParseIntPipe) id: number): Promise<void> {
        return this.skillService.remove(id);
    }
}

import {
    Controller,
    Get,
    UseGuards,
    Request,
} from '@nestjs/common';
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {UserTestResultsService} from "../services/user-test-results.service";


@Controller('user/test-results')
@UseGuards(JwtAuthGuard)
export class UserTestResultsController {
    constructor(private readonly service: UserTestResultsService) {}

    @Get()
    async getAllTestResults(@Request() req) {
        return this.service.getAllResultsForUser(req.user);
    }
}

import {
    Body,
    Controller,
    Get,
    Post,
    Request,
    UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateTaskDto } from './dto/create-task.dto';
import { ExtractTaskDto } from './dto/extract-task.dto';
import { ExtractTaskService } from './extract-task.service';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
    constructor(
        private readonly taskService: TaskService,
        private readonly extractTaskService: ExtractTaskService,
    ) {}

    @Get()
    getTask(): string {
        return 'Task is working just fine!';
    }

    @UseGuards(JwtAuthGuard)
    @Post('create')
    async postCreate(
        @Body() createTaskDto: CreateTaskDto,
        @Request() req: any,
    ): Promise<any> {
        return this.taskService.postCreate(createTaskDto, req.user);
    }

    // @Post('extract')
    // async postExtract(@Body() extractTaskDto: ExtractTaskDto): Promise<any> {
    //   return this.extractTaskService.postExtract(extractTaskDto);
    // }
}

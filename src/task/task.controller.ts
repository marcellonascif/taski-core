import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateTaskService } from './create-task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { ExtractTaskDto } from './dto/extract-task.dto';
import { ExtractTaskService } from './extract-task.service';

@Controller('task')
export class TaskController {
  constructor(
    private readonly createTaskService: CreateTaskService,
    private readonly extractTaskService: ExtractTaskService,
  ) {}

  @Get()
  getTask(): string {
    return 'Task is working just fine!';
  }

  @Post('create')
  async postCreate(@Body() createTaskDto: CreateTaskDto): Promise<any> {
    return this.createTaskService.postCreate(createTaskDto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('extract')
  async postExtract(@Body() extractTaskDto: ExtractTaskDto): Promise<any> {
    return this.extractTaskService.postExtract(extractTaskDto);
  }
}

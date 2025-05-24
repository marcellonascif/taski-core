import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { ExtractTaskDto } from './dto/extract-task.dto';
import { ExtractTaskService } from './extract-task.service';

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

  // @UseGuards(JwtAuthGuard)
  @Post('create')
  async postCreate(@Body() createTaskDto: CreateTaskDto): Promise<any> {
    return this.taskService.postCreate(createTaskDto);
  }

  // @Post('extract')
  // async postExtract(@Body() extractTaskDto: ExtractTaskDto): Promise<any> {
  //   return this.extractTaskService.postExtract(extractTaskDto);
  // }
}

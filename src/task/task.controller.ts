import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { ExtractTaskService } from './extract-task.service';
import { ExtractTaskDto } from './dto/extract-task.dto';

const TASK_PATH = process.env.TASK_PATH || 'task';

@Controller(TASK_PATH)
export class TaskController {
  constructor(private readonly extractTaskService: ExtractTaskService) {}

  @Get()
  getTask(): string {
    return 'Task is working just fine!';
  }

  @Get('extract')
  getExtractTask(): string {
    return 'Extract Task is working just fine!';
  }

  @Post('extract')
  async postExtractTask(@Body() extractTaskDto: ExtractTaskDto): Promise<any> {
    return this.extractTaskService.postExtractTask(extractTaskDto);
  }
}

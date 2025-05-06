import { Controller, Get, Post, Req } from '@nestjs/common';
import { ExtractTaskService } from './extract-task.service';
import { Request } from 'express';

const EXTRACT_TASK_PATH = process.env.EXTRACT_TASK_PATH || 'extract-task';

@Controller(EXTRACT_TASK_PATH)
export class ExctratTaskController {
  constructor(private readonly extractTaskService: ExtractTaskService) {}

  @Get()
  getAutoComplete(): any {
    return this.extractTaskService.getExtractTask();
  }

  @Post()
  async autoCompleteTask(@Req() req: Request): Promise<any> {
    return this.extractTaskService.postExtractTask(req);
  }
}

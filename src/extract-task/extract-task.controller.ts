import { Controller, Get, Post, Req } from '@nestjs/common';
import { ExtractTaskService } from './extract-task.service';
import { Request } from 'express';

@Controller('extract-task')
export class ExctratTaskController {
  constructor(private readonly extractTaskService: ExtractTaskService) {}

  @Get()
  getAutoComplete(): any {
    return this.extractTaskService.getAutoComplete();
  }

  @Post()
  async autoCompleteTask(@Req() req: Request): Promise<any> {
    return this.extractTaskService.autoCompleteTask(req);
  }
}

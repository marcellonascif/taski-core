import { Controller, Get, Post, Req } from '@nestjs/common';
import { AutoCompleteService } from './auto-complete.service';
import { Request } from 'express';

@Controller('auto-complete')
export class AutoCompleteController {
  constructor(private readonly autoCompleteService: AutoCompleteService) {}

  @Get()
  getAutoComplete(): any {
    return this.autoCompleteService.getAutoComplete();
  }

  @Post()
  async autoCompleteTask(@Req() req: Request): Promise<any> {
    return this.autoCompleteService.autoCompleteTask(req);
  }
}

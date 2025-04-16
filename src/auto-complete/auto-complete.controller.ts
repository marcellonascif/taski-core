import { Controller, Get, Post, Req } from '@nestjs/common';
import { AutoCompleteService } from './auto-complete.service';

@Controller('auto-complete')
export class AutoCompleteController {
  constructor(private readonly autoCompleteService: AutoCompleteService) {}

  @Get()
  getAutoComplete(): any {
    return this.autoCompleteService.getAutoComplete();
  }

  @Post()
  async autoCompleteTask(@Req() req: any): Promise<any> {
    const userPrompt = JSON.stringify(req.body.prompt);
    return this.autoCompleteService.autoCompleteTask(userPrompt);
  }
}

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
  async generateText(@Req() req: any): Promise<any> {
    const prompt = JSON.stringify(req.body.prompt);
    return this.autoCompleteService.generateText(prompt);
  }
}

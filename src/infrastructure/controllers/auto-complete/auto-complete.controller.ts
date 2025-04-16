import { Controller, Get } from '@nestjs/common';
import { AutoCompleteService } from '@application/services/auto-complete/auto-complete.service';

@Controller('auto-complete')
export class AutoCompleteController {
    constructor(private readonly autoCompleteService: AutoCompleteService) {}

    @Get()
    async getHello(): Promise<string> {
        return await this.autoCompleteService.getHello();
    }
}

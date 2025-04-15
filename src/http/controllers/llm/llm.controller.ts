import { Controller, Get } from '@nestjs/common';
import { LlmService } from '@application/services/llm/llm.service';

@Controller('llm')
export class LlmController {
    constructor(private readonly llmService: LlmService) {}

    @Get()
    async getHello(): Promise<string> {
        return await this.llmService.getHello();
    }
}

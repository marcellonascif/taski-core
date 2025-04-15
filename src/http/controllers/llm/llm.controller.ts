import { Controller, Get } from '@nestjs/common';

@Controller('llm')
export class LlmController {
    @Get()
    getHello(): string {
        return 'Hello World from LLM!';
    }
}

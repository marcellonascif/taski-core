import { Injectable } from '@nestjs/common';

@Injectable()
export class LlmService {
    async getHello(): Promise<string> {
        return 'Hello World from LLM Service!';
    }
}

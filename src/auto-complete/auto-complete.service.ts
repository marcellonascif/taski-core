import { Injectable } from '@nestjs/common';
import { GeminiService } from './llm-client/gemini.service';

@Injectable()
export class AutoCompleteService {
    constructor(private readonly llmClient: GeminiService) {}

    getAutoComplete(): string {
        return 'Auto-complete service is working!';
    }

    async generateText(prompt: string): Promise<any> {
        await this.llmClient.connect();
        return this.llmClient.generateText(prompt);
    }
}

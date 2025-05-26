import { Injectable } from '@nestjs/common';
import { LlmClient } from '@application/clients/llm.client';

@Injectable()
export class ExtractTaskUseCase {
    // uses a LLM to extract tasks from a prompt
    constructor(private readonly llmClient: LlmClient) {}
    async execute(prompts: { system: string; user: string }): Promise<string> {
        const response = await this.llmClient.generateText(
            prompts.system,
            prompts.user,
        );

        return response;
    }
}

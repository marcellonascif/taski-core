import { Injectable, OnModuleInit } from '@nestjs/common';
import { LlmClient } from '@application/clients/llm.client';
import { ChatGoogleGenerativeAI } from '@langchain/google-genai';

@Injectable()
export class GeminiLlmClient extends LlmClient implements OnModuleInit {
    private model: any;
    constructor() {
        super();
    }
    onModuleInit() {
        this.model = new ChatGoogleGenerativeAI({
            model: 'gemini-2.0-flash',
            temperature: 0.5,
            maxRetries: 2,
            maxOutputTokens: 2000,
            apiKey: process.env.GOOGLE_API_KEY || '',
        });
    }

    async generateText(
        systemPrompt: string,
        userPrompt: string,
    ): Promise<string> {
        const response = await this.model.invoke([
            {
                role: 'system',
                content: systemPrompt,
            },
            {
                role: 'user',
                content: userPrompt,
            },
        ]);

        return response.text;
    }
}

import { Injectable, OnModuleInit } from '@nestjs/common';
import { config } from 'dotenv';
import { LlmClient } from './llm-client.interface';
import { ChatGoogleGenerativeAI } from '@langchain/google-genai';

config();

@Injectable()
export class LlmGeminiService implements LlmClient, OnModuleInit {
    private model: ChatGoogleGenerativeAI;
    private readonly apiKey: string = process.env.GOOGLE_API_KEY || '';

    async onModuleInit(): Promise<void> {
        await this.connect();
    }

    private async connect(): Promise<void> {
        this.model = new ChatGoogleGenerativeAI({
            model: "gemini-2.0-flash-lite",
            temperature: 0.3,
            maxRetries: 2,
            maxOutputTokens: 2000,
            apiKey: this.apiKey,
        });
    }

    async generateText(systemPrompt: string, userPrompt: string): Promise<any> {
        const response = await this.model.invoke([
            {
                role: 'system',
                content: systemPrompt
            },
            {
                role: 'user',
                content: userPrompt
            }
        ]);

        console.log('Response from Gemini:', response);

        return response.text;
    }
}

import { Injectable, OnModuleInit } from '@nestjs/common';
import { config } from 'dotenv';
import { LlmClient } from './llm-client.interface';
import { ChatGoogleGenerativeAI } from '@langchain/google-genai';

config();

@Injectable()
export class LlmGeminiService implements LlmClient, OnModuleInit {
    private model: ChatGoogleGenerativeAI;
    private readonly apiKey: string = process.env.GOOGLE_API_KEY || '';

    private async connect(): Promise<void> {
        this.model = new ChatGoogleGenerativeAI({
            model: "gemini-2.0-flash",
            temperature: 0.2,
            maxRetries: 2,
            maxOutputTokens: 1000,
            apiKey: this.apiKey,
        });
    }

    async onModuleInit(): Promise<void> {
        await this.connect();
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

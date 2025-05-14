import { Injectable, OnModuleInit } from '@nestjs/common';
import { LlmClient } from './llm-client.interface';
import { ChatGoogleGenerativeAI } from '@langchain/google-genai';
import { ChatPromptTemplate } from '@langchain/core/prompts';

@Injectable()
export class LlmGeminiService implements LlmClient, OnModuleInit {
  private model: ChatGoogleGenerativeAI;
  private promptTemplate: any;
  private readonly apiKey: string = process.env.GOOGLE_API_KEY || '';

  async onModuleInit(): Promise<void> {
    await this.connect();
  }

  private async connect(): Promise<void> {
    this.model = new ChatGoogleGenerativeAI({
      model: 'gemini-2.0-flash',
      temperature: 0.5,
      maxRetries: 2,
      maxOutputTokens: 2000,
      apiKey: this.apiKey,
    });
  }

  private;

  async generateText(systemPrompt: string, userPrompt: string): Promise<any> {
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

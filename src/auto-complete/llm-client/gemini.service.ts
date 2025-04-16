import { Injectable } from '@nestjs/common';
import { config } from 'dotenv';
import { LlmClient } from './llm-client.interface';
import { ChatGoogleGenerativeAI } from '@langchain/google-genai';

config();

const systemPrompt: string = 'Você é um assistente que completa tarefas em JSON. Dado um objeto JSON com alguns campos em branco ou vazios, preencha apenas os campos faltantes de forma coerente com o contexto, ou seja, o que já está preenchido no JSON. Sempre devolva o mesmo objeto JSON, com os campos preenchidos. Não adicione nenhum comentário sobre a resposta. Não adicione nenhum campo novo';

@Injectable()
export class GeminiService implements LlmClient {
    private model: ChatGoogleGenerativeAI;
    private readonly apiKey: string = process.env.GOOGLE_API_KEY || '';

    async connect(): Promise<void> {
        this.model = new ChatGoogleGenerativeAI({
            model: "gemini-2.0-flash",
            temperature: 0.2,
            maxRetries: 2,
            maxOutputTokens: 1000,
            apiKey: this.apiKey,
        });
    }

    async generateText(prompt: string): Promise<any> {
        const response = await this.model.invoke([
                {
                    role: 'system',
                    content: systemPrompt
                },
                {
                    role: 'user',
                    content: prompt
                }
        ]);

        console.log('Response from Gemini:', response);

        return response.text;
    }
}

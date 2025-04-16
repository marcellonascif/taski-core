import { Injectable } from '@nestjs/common';
import { LlmGeminiService } from './llm-client/llm-gemini.service';

const systemPrompt = 'Você é um assistente que completa tarefas em JSON. Dado um objeto JSON com alguns campos em branco ou vazios, preencha apenas os campos faltantes de forma coerente com o contexto, ou seja, o que já está preenchido no JSON. Sempre devolva o mesmo objeto JSON, com os campos preenchidos. Não adicione nenhum comentário sobre a resposta. Não adicione nenhum campo novo';

@Injectable()
export class AutoCompleteService {
    constructor(private readonly llmClient: LlmGeminiService) {}

    getAutoComplete(): string {
        return 'Auto-complete service is working!';
    }

    async autoCompleteTask(userPrompt: string): Promise<any> {
        // await this.llmClient.connect();
        return this.llmClient.generateText(systemPrompt, userPrompt);
    }
}

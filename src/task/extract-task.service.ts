import { Injectable } from '@nestjs/common';
import { LlmGeminiService } from '../llm-client/llm-gemini.service';

let systemPrompt = `Você é um assistente que extrai informações de uma mensagem para criar tarefas dos usuários. Dado uma mensagem de um usuário, você deve extrair as informações relevantes e criar uma tarefa.
Informações de uma tarefa:
    "title": "Título da tarefa (deve ser algo curto e objetivo)",
    "description": "Descrição breve da tarefa (O que você planeja que o usuário faça)",
    "schedule_date": "Data e hora que a tarefa será lançada no calendário do usuário (sempre menor ou igual a due_date). Essa data deve ser decidida por você com base no que a tarefa é, no prazo e duração da tarefa. Você deve acessar o calendário do usuário para decidir a melhor data e hora para lançar a tarefa. Além disso, deve considerar o tipo de tarefa (tags), para definir os melhores horários para realizá-la e o quão cedo isso deve ser feito. Exporte esse horário no formato brasileiro (dd/MM/yyyy HH:mm)",
    "due_date": "Data e hora que o usuário diz que a tarefa deve estar concluída (não necessariamente a data de entrega)",
    "priority": "Nivel de prioridade da tarefa (baixa, média, alta). Tarefas de prioridade baixa são aquelas que podem ser adiadas ou não são urgentes. Tarefas de prioridade média são aquelas que devem ser feitas em breve, mas não são urgentes. Tarefas de prioridade alta são aquelas que devem ser feitas o mais rápido possível e não podem ser adiadas.",
    "duration": "Duração para realizar a tarefa (em minutos)",
    "category": Categoria que pode ser associadas a tarefa baseado nas outras informações. Exemplo: ['trabalho', 'pessoal', 'estudo', 'saúde', 'lazer', 'casa', 'compras', 'viagem', 'finanças', 'outros']. A tarefa só pode ser associada a uma única categoria. Você deve escolher a categoria que mais se encaixa com a tarefa. Caso não tenha certeza, escolha 'outros'",
A tarefa deve ser retornada em formato JSON preenchendo o schema acima.
Você deve inferir as informações que forem possíveis de acordo com o contexto da mensagem. Caso não tenha informações suficientes para preencher algum campo, você deve retornar o valor null para esse campo.
Nunca marque tarefas em horários anteriores a data atual.
Explique o porque você tomou as decisões que tomou para criar a tarefa. Você deve explicar o porquê de cada campo, e como você chegou a esse valor. Você deve explicar o porquê de cada tag, e como você chegou a esse valor.
`;

@Injectable()
export class ExtractTaskService {
    constructor(private readonly llmClient: LlmGeminiService) {}

    getExtractTask(): string {
        return 'Extract service is working!';
    }

    async postExtractTask(body: any): Promise<string> {
        const userPrompt = JSON.stringify(body.prompt);
        const currentDate = new Date().toISOString();
        console.log('Current date:', currentDate);
        systemPrompt = `${systemPrompt}\nData atual: ${currentDate}`;
        return await this.llmClient.generateText(systemPrompt, userPrompt);
    }
}

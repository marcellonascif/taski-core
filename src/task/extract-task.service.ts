import { BadRequestException, Injectable } from '@nestjs/common';
import { LlmGeminiService } from '@llm/llm-gemini.service';

const BASE_SYSTEM_PROMPT = `Você é um assistente que extrai informações de uma mensagem para criar tarefas dos usuários. Dado uma mensagem de um usuário, você deve extrair as informações relevantes e criar uma tarefa.
Informações de uma tarefa:
    "title": Título da tarefa (deve ser algo curto e objetivo),
    "description": Descrição da tarefa (deve ser algo mais longo e detalhado, explicando o que deve ser feito). Não deve ser igual ao título.,
    "plan": Trace um plano de como devo realizar a tarefa, com os passos que devo seguir. O plano deve ser o mais detalhado possível, com os passos que você acha que são necessários para realizar a tarefa. O plano deve ser escrito em formato de lista, com cada passo em uma linha separada. O plano deve ser feito para até a conclusão da tarefa, nunca para após o que a tarefa tem como objetivo principal.
    "scheduled_date": Data e hora que a tarefa será lançada no calendário do usuário (sempre menor ou igual a due_date). Essa data deve ser decidida por você com base no que a tarefa é, no prazo e duração da tarefa. Você deve acessar o calendário do usuário para decidir a melhor data e hora para lançar a tarefa. Além disso, deve considerar o tipo de tarefa (tags), para definir os melhores horários para realizá-la e o quão cedo isso deve ser feito. Retorne no formato ISO 8601 (YYYY-MM-DDTHH:mm:ssZ).,
    "due_date": Data e hora que o usuário diz que a tarefa deve estar concluída (não necessariamente a data de entrega),
    "priority": Nivel de prioridade da tarefa (1, 2, 3). Tarefas de prioridade baixa são aquelas que podem ser adiadas ou não são urgentes. Tarefas de prioridade média são aquelas que devem ser feitas em breve, mas não são urgentes. Tarefas de prioridade alta são aquelas que devem ser feitas o mais rápido possível e não podem ser adiadas.",
    "duration": Duração para realizar a tarefa (em minutos),
    "category": Categoria que pode ser associadas a tarefa baseado nas outras informações. Exemplo: ['trabalho', 'faculdade', 'saúde', 'lazer', 'casa', 'compras', 'viagem', 'finanças', 'outros']. A tarefa só pode ser associada a uma única categoria. Você deve escolher a categoria que mais se encaixa com a tarefa. Caso não tenha certeza, escolha 'outros'".
    "mentalEnergy": Valor de energia mental necessária para realizar a tarefa (1 a 5). Tarefas que exigem mais energia mental são aquelas que exigem mais concentração e foco. Tarefas que exigem menos energia mental são aquelas que podem ser feitas de maneira menos concentrada, como responder um email do dia a dia.
    "physicalEnergy": Valor de energia física necessária para realizar a tarefa (1 a 5). Tarefas que exigem mais energia física são aquelas que exigem mais esforço físico. Tarefas que exigem menos energia física são aquelas que podem ser feitas sem cansaço físico, como digitar linhas de código no computador.
Me retorne apenas o JSON com as informações da tarefa.
Você deve inferir as informações que forem possíveis de acordo com o contexto da mensagem. Caso não tenha informações suficientes para preencher algum campo, você deve retornar o valor null para esse campo.
Nunca marque tarefas em horários anteriores a data atual.
Preencha os campos na linguagem que estiver o prompt do usuário, isto é, se o prompt estiver em inglês, os campos devem ser preenchidos em inglês. Se o prompt estiver em português, os campos devem ser preenchidos em português.
`;

@Injectable()
export class ExtractTaskService {
  constructor(private readonly llmClient: LlmGeminiService) {}

  async postExtract(body: any): Promise<any> {
    const userPrompt = JSON.stringify(body.prompt);
    const currentDate = new Date().toISOString();
    console.log('Current date:', currentDate);

    const systemPrompt = `${BASE_SYSTEM_PROMPT}\nData atual: ${currentDate}`;
    const llmResponse = await this.llmClient.generateText(
      systemPrompt,
      userPrompt,
    );
    console.log('LLM response:', llmResponse);

    return this.parseResponse(llmResponse);
  }

  private parseResponse(response: string): any {
    const text = response.trim();

    try {
      const startIndex = text.indexOf('{');
      const endIndex = text.lastIndexOf('}');

      if (startIndex === -1 || endIndex === -1) {
        throw new BadRequestException(
          'Invalid response format from LLM. Expected JSON object.',
        );
      }

      const jsonString = text.substring(startIndex, endIndex + 1);
      const task = JSON.parse(jsonString);

      return task;
    } catch (error) {
      throw new BadRequestException(
        'Invalid response format from LLM. Expected JSON object.',
      );
    }
  }
}

export interface LlmClient {
  generateText(systemPrompt: string, userPrompt: string): Promise<string>;
}

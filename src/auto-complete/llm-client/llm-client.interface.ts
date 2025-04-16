export interface LlmClient {
    generateText(prompt: string): Promise<string>;
}

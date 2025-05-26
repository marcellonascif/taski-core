export abstract class LlmClient {
    abstract generateText(
        systemPrompt: string,
        userPrompt: string,
    ): Promise<string>;
}

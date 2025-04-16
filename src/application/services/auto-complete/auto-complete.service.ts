import { Injectable } from '@nestjs/common';

@Injectable()
export class AutoCompleteService {
    async getHello(): Promise<string> {
        return 'Hello World from LLM Service!';
    }
}

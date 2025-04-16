import { Module } from '@nestjs/common';
import { AutoCompleteService } from './auto-complete.service';
import { AutoCompleteController } from './auto-complete.controller';
import { LlmGeminiService } from './llm-client/llm-gemini.service';

@Module({
  controllers: [AutoCompleteController],
  providers: [AutoCompleteService, LlmGeminiService],
})
export class AutoCompleteModule {}

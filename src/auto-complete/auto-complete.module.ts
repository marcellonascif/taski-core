import { Module } from '@nestjs/common';
import { AutoCompleteService } from './auto-complete.service';
import { AutoCompleteController } from './auto-complete.controller';
import { GeminiService } from './llm-client/gemini.service';

@Module({
  controllers: [AutoCompleteController],
  providers: [AutoCompleteService, GeminiService],
})
export class AutoCompleteModule {}

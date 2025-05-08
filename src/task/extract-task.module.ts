import { Module } from '@nestjs/common';
import { ExtractTaskService } from './extract-task.service';
import { ExctratTaskController } from './extract-task.controller';
import { LlmGeminiService } from '../llm-client/llm-gemini.service';

@Module({
  controllers: [ExctratTaskController],
  providers: [ExtractTaskService, LlmGeminiService],
})
export class ExtractTaskModule {}

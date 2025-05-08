import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { ExtractTaskService } from './extract-task.service';
import { LlmGeminiService } from '../llm-client/llm-gemini.service';

@Module({
  controllers: [TaskController],
  providers: [ExtractTaskService, LlmGeminiService],
})
export class TaskModule {}

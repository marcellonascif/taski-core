import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { CreateTaskService } from './create-task.service';
import { ExtractTaskService } from './extract-task.service';
import { LlmGeminiService } from 'src/llm-client/llm-gemini.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [TaskController],
  providers: [CreateTaskService, ExtractTaskService, PrismaService, LlmGeminiService],
})
export class TaskModule {}

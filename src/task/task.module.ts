import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { CreateTaskService } from './create-task.service';
import { ExtractTaskService } from './extract-task.service';
import { LlmGeminiService } from '@llm/llm-gemini.service';
import { PrismaModule } from '@db/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TaskController],
  providers: [CreateTaskService, ExtractTaskService, LlmGeminiService],
})
export class TaskModule {}

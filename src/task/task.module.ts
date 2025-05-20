import { Module } from '@nestjs/common';
import { PrismaModule } from '@db/prisma.module';
import { LlmGeminiService } from '@llm/llm-gemini.service';
import { CreateTaskService } from './create-task.service';
import { ExtractTaskService } from './extract-task.service';
import { TaskController } from './task.controller';

@Module({
  imports: [PrismaModule],
  controllers: [TaskController],
  providers: [CreateTaskService, ExtractTaskService, LlmGeminiService],
})
export class TaskModule {}

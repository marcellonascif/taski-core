import { Module } from '@nestjs/common';
import { CreateTaskUseCase } from '@application/usecases/create-task.usecase';
import { PrismaModule } from '@db/prisma.module';
import { TaskRepository } from '@application/repositories/task.repository';
import { PrismaTaskRepository } from '@infrastructure/repositories/prisma-task.repository';
import { LlmGeminiService } from '@llm/llm-gemini.service';
import { CreateTaskService } from './create-task.service';
import { ExtractTaskService } from './extract-task.service';
import { TaskController } from './task.controller';

@Module({
  imports: [PrismaModule],
  controllers: [TaskController],
  providers: [
    CreateTaskService,
    CreateTaskUseCase,
    { provide: TaskRepository, useClass: PrismaTaskRepository },
    ExtractTaskService,
    LlmGeminiService,
  ],
})
export class TaskModule {}

import { Module } from '@nestjs/common';
import { LlmClient } from '@application/clients/llm.client';
import { TaskRepository } from '@application/repositories/task.repository';
import { CreateTaskUseCase } from '@application/usecases/create-task.usecase';
import { ExtractTaskUseCase } from '@application/usecases/extract-task.usecase';
import { PrismaModule } from '@db/prisma.module';
import { GeminiLlmClient } from '@infrastructure/clients/gemini-llm.client';
import { PrismaTaskRepository } from '@infrastructure/repositories/prisma-task.repository';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

@Module({
    imports: [PrismaModule],
    controllers: [TaskController],
    providers: [
        TaskService,
        CreateTaskUseCase,
        { provide: TaskRepository, useClass: PrismaTaskRepository },
        ExtractTaskUseCase,
        { provide: LlmClient, useClass: GeminiLlmClient },
    ],
})
export class TaskModule {}

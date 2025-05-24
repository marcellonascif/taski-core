import { Module } from '@nestjs/common';
import { TaskRepository } from '@application/repositories/task.repository';
import { CreateTaskUseCase } from '@application/usecases/create-task.usecase';
import { PrismaModule } from '@db/prisma.module';
import { PrismaTaskRepository } from '@infrastructure/repositories/prisma-task.repository';
import { LlmGeminiService } from '@llm/llm-gemini.service';
import { ExtractTaskService } from './extract-task.service';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

@Module({
    imports: [PrismaModule],
    controllers: [TaskController],
    providers: [
        TaskService,
        ExtractTaskService,
        CreateTaskUseCase,
        { provide: TaskRepository, useClass: PrismaTaskRepository },
        LlmGeminiService,
    ],
})
export class TaskModule {}

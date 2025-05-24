import { Injectable } from '@nestjs/common';
import { TaskRepository } from '@application/repositories/task.repository';
import { PrismaService } from '@db/prisma.service';
import { Task } from '@domain/entities/task.entity';

@Injectable()
export class PrismaTaskRepository extends TaskRepository {
    constructor(private readonly prisma: PrismaService) {
        super();
    }

    async save(task: any): Promise<Task> {
        const createdTask: Task = await this.prisma.task.create({
            data: {
                ...task,
            },
        });

        return createdTask;
    }
}

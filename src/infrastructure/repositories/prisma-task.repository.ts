import { Injectable } from '@nestjs/common';
import { PrismaService } from '@db/prisma.service';
import { Task } from '@domain/entities/task.entity';
import { TaskRepository } from '@application/repositories/task.repository';

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

import { Injectable } from '@nestjs/common';
import { TaskRepository } from '@application/repositories/task.repository';
import { Task } from '@domain/entities/task.entity';

@Injectable()
export class CreateTaskUseCase {
  constructor(private readonly repo: TaskRepository) {}

  async execute(task: any): Promise<Task> {
    return this.repo.save(task);
  }
}

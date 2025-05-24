import { Injectable } from '@nestjs/common';
import { Task } from '@domain/entities/task.entity';
import { TaskRepository } from '@application/repositories/task.repository';

@Injectable()
export class CreateTaskUseCase {
  constructor(private readonly repo: TaskRepository) {}

  async execute(createTaskDto: any): Promise<Task> {
    return this.repo.create(createTaskDto);
  }
}

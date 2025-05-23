import { Injectable } from '@nestjs/common';
import { CreateTaskUseCase } from '@application/usecases/create-task.usecase';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class CreateTaskService {
  constructor(private readonly createTask: CreateTaskUseCase) {}

  async postCreate(createTaskDto: CreateTaskDto): Promise<any> {
    const createdTask = this.createTask.execute(createTaskDto);

    return createdTask;
  }
}

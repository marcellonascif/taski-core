import { Injectable } from '@nestjs/common';
import { CreateTaskUseCase } from '@application/usecases/create-task.usecase';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskService {
    constructor(private readonly createTask: CreateTaskUseCase) {}

    async postCreate(createTaskDto: CreateTaskDto, user: any): Promise<any> {
        const task = {
            ...createTaskDto,
            userId: user.userId,
        };

        const createdTask = this.createTask.execute(task);

        return createdTask;
    }
}

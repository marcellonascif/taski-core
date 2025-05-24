import { Task } from '@domain/entities/task.entity';

export abstract class TaskRepository {
  abstract save(task: any): Promise<Task>;
}

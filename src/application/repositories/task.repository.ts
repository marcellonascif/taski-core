import { Task } from '@domain/entities/task.entity';

export abstract class TaskRepository {
  abstract create(task: Task): Promise<Task>;
}

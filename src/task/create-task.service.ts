import { Injectable } from '@nestjs/common';
import { PrismaService } from '@db/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class CreateTaskService {
    constructor(private readonly prisma: PrismaService) {}

    async postCreate(createTaskDto: CreateTaskDto): Promise<any> {
        const task = await this.prisma.task.create({
            data: {
                ...createTaskDto,
            },
        });

        return task;

    }
}

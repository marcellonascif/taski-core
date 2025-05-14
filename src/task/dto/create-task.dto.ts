import { IsDate, IsInt, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateTaskDto {
    @IsString()
    title: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsOptional()
    plan?: string;

    @Type(() => Date)
    @IsDate()
    scheduledDate: Date;

    @IsOptional()
    @Type(() => Date)
    @IsDate()
    dueDate?: Date;

    @IsInt()
    priority: number;

    @IsInt()
    duration: number;

    @IsString()
    category: string;

    @IsInt()
    mentalEnergy: number;

    @IsInt()
    physicalEnergy: number;
}

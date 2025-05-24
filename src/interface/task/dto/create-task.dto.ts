import { Type } from 'class-transformer';
import { IsDate, IsInt, IsOptional, IsString } from 'class-validator';

export class CreateTaskDto {
    @IsString()
    title: string;

    @IsString()
    @IsOptional()
    description: string | null;

    @IsString()
    @IsOptional()
    plan: string | null;

    @Type(() => Date)
    @IsDate()
    scheduledDate: Date;

    @IsOptional()
    @Type(() => Date)
    @IsDate()
    dueDate: Date | null;

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

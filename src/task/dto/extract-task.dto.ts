import { IsString } from "class-validator";

export class ExtractTaskDto {
  @IsString()
  prompt: string;
}

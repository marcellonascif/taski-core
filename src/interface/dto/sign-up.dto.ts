import { IsEmail, IsString } from 'class-validator';

export class SignUpDto {
    @IsString()
    username: string;

    @IsEmail()
    email: string;

    @IsString()
    password: string;

    @IsString()
    name: string;
}

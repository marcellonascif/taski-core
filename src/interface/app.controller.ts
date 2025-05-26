import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        return 'Main page of Taski!';
    }

    @Post('auth/signup')
    async handleSignUp(@Body() signUpDto: SignUpDto): Promise<any> {
        return await this.appService.handleSignUp(signUpDto);
    }

    @Post('auth/signin')
    async handleSignIn(@Body() signInDto: SignInDto): Promise<any> {
        return await this.appService.handleSignIn(signInDto);
    }
}

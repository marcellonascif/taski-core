import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { SignInDto } from './dto/sign-in.dto';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        return 'Main page of Taski!';
    }

    @Post('auth/signin')
    async handleSignIn(@Body() signInDto: SignInDto): Promise<any> {
        return await this.appService.handleSignIn(signInDto);
    }
}

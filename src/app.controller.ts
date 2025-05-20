import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getHello(): string {
    return 'Main page of Taski!';
  }

  @HttpCode(HttpStatus.OK)
  @Post('auth/login')
  async login(@Body() body: any): Promise<any> {
    return await this.authService.login(body);
  }
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TaskModule } from './task/task.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TaskModule, AuthModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

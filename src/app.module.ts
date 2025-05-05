import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExtractTaskModule } from './extract-task/extract-task.module';

@Module({
    imports: [ExtractTaskModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}

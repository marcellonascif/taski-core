import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutoCompleteModule } from './auto-complete/auto-complete.module';

@Module({
    imports: [AutoCompleteModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}

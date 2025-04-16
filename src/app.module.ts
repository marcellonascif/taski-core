import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from './infrastructure/controllers/http.module';
import { ApplicationModule } from './application/services/application.module';

@Module({
    imports: [HttpModule, ApplicationModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}

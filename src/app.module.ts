import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from './http/http.module';
import { ApplicationModule } from './application/application.module';

@Module({
    imports: [HttpModule, ApplicationModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AutoCompleteModule } from '@application/services/auto-complete/auto-complete.module';
import { AutoCompleteController } from './auto-complete/auto-complete.controller';

@Module({
    imports: [AutoCompleteModule],
    controllers: [AutoCompleteController],
})
export class HttpModule {}

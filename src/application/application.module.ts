import { Module } from '@nestjs/common';
import { AutoCompleteModule } from './services/auto-complete/auto-complete.module';

@Module({
    imports: [AutoCompleteModule],
})
export class ApplicationModule {}

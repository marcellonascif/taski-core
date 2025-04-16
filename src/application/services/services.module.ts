import { Module } from '@nestjs/common';
import { AutoCompleteModule } from './auto-complete/auto-complete.module';

@Module({
    imports: [AutoCompleteModule],
})
export class ApplicationModule {}

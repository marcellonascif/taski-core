import { Module } from '@nestjs/common';
import { AutoCompleteService } from './auto-complete.service';

@Module({
    providers: [AutoCompleteService],
    exports: [AutoCompleteService],
})
export class AutoCompleteModule {}

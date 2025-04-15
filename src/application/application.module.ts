import { Module } from '@nestjs/common';
import { LlmModule } from './services/llm/llm.module';

@Module({
  imports: [LlmModule]
})
export class ApplicationModule {}

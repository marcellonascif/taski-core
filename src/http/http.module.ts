import { Module } from '@nestjs/common';
import { LlmController } from './controllers/llm/llm.controller';

@Module({
  controllers: [LlmController]
})
export class HttpModule {}

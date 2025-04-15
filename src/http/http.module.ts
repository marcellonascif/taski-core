import { Module } from '@nestjs/common';
import { LlmController } from './controllers/llm/llm.controller';
import { LlmModule } from '@application/services/llm/llm.module';

@Module({
  imports: [LlmModule],
  controllers: [LlmController],
})
export class HttpModule {}

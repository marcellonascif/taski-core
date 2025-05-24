import { Module } from '@nestjs/common';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
    providers: [JwtStrategy, JwtAuthGuard],
})
export class AuthModule {}

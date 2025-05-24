import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserRepository } from '@application/repositories/user.repository';
import { TokenProvider } from '@application/tokens/token.provider';
import { SignInUseCase } from '@application/usecases/sign-in.usecase';
import { PrismaModule } from '@db/prisma.module';
import { PrismaUserRepository } from '@infrastructure/repositories/prisma-user.repository';
import { JwtTokenProvider } from '@infrastructure/tokens/jwt-token.provider';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
    imports: [
        PrismaModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: '60min' },
        }),
    ],
    controllers: [AuthController],
    providers: [
        AuthService,
        SignInUseCase,
        {
            provide: UserRepository,
            useClass: PrismaUserRepository,
        },
        {
            provide: TokenProvider,
            useClass: JwtTokenProvider,
        },
    ],
})
export class AuthModule {}

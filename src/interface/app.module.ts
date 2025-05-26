import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PasswordHasher } from '@application/hashers/password.hasher';
import { UserRepository } from '@application/repositories/user.repository';
import { TokenProvider } from '@application/tokens/token.provider';
import { SignInUseCase } from '@application/usecases/sign-in.usecase';
import { SignUpUseCase } from '@application/usecases/sign-up.usecase';
import { PrismaModule } from '@db/prisma.module';
import { BCryptPasswordHasher } from '@infrastructure/hashers/bcrypt-password.hasher';
import { PrismaUserRepository } from '@infrastructure/repositories/prisma-user.repository';
import { JwtTokenProvider } from '@infrastructure/tokens/jwt-token.provider';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TaskModule } from './task/task.module';

@Module({
    imports: [
        PrismaModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: '60s' },
        }),
        TaskModule,
        AuthModule,
    ],
    controllers: [AppController],
    providers: [
        AppService,
        SignUpUseCase,
        SignInUseCase,
        {
            provide: UserRepository,
            useClass: PrismaUserRepository,
        },
        {
            provide: PasswordHasher,
            useClass: BCryptPasswordHasher,
        },
        {
            provide: TokenProvider,
            useClass: JwtTokenProvider,
        },
    ],
})
export class AppModule {}

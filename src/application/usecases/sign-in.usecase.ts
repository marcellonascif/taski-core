import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from '@application/repositories/user.repository';
import { TokenProvider } from '@application/tokens/token.provider';
import { User } from '@domain/entities/user.entity';
import { PasswordHasher } from '@application/hashers/password.hasher';

@Injectable()
export class SignInUseCase {
    constructor(
        private readonly repo: UserRepository,
        private readonly passwordHasher: PasswordHasher,
        private readonly tokenProvider: TokenProvider,
    ) {}

    async execute(userData: {
        email: string;
        password: string;
    }): Promise<string> {
        const user: User | null = await this.repo.findByEmail(userData.email);

        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }

        else if (!await this.passwordHasher.compare(userData.password, user.password)) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const payload = { sub: user.id, email: user.email };
        return await this.tokenProvider.sign(payload);
    }
}

import { ConflictException, Injectable } from '@nestjs/common';
import { PasswordHasher } from '@application/hashers/password.hasher';
import { UserRepository } from '@application/repositories/user.repository';
import { User } from '@domain/entities/user.entity';

@Injectable()
export class SignUpUseCase {
    constructor(
        private readonly repo: UserRepository,
        private readonly passwordHasher: PasswordHasher,
    ) {}

    async execute(userData: {
        username: string;
        email: string;
        password: string;
        name: string;
    }): Promise<any> {
        const existingEmail = await this.repo.findByEmail(userData.email);
        if (existingEmail) {
            throw new ConflictException('User with this email already exists');
        }

        const existingUsername = await this.repo.findByUsername(
            userData.username,
        );
        if (existingUsername) {
            throw new ConflictException(
                'User with this username already exists',
            );
        }

        userData.password = await this.passwordHasher.hash(userData.password);

        const user: User = await this.repo.save(userData);
        return user;
    }
}

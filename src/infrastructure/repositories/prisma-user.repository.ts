import { Injectable } from '@nestjs/common';
import { UserRepository } from '@application/repositories/user.repository';
import { PrismaService } from '@db/prisma.service';
import { User } from '@domain/entities/user.entity';

@Injectable()
export class PrismaUserRepository extends UserRepository {
    constructor(private readonly prisma: PrismaService) {
        super();
    }

    async save(user: {
        username: string;
        email: string;
        password: string;
        name: string;
    }): Promise<User> {
        const savedUser = await this.prisma.user.upsert({
            create: {
                username: user.username,
                email: user.email,
                password: user.password,
                name: user.name,
            },
            update: {
                username: user.username,
                email: user.email,
                password: user.password,
                name: user.name,
            },
            where: {
                email: user.email,
            },
        });

        return User.create(savedUser);
    }

    async findByEmail(email: string): Promise<User | null> {
        const foundUser = await this.prisma.user.findUnique({
            where: {
                email: email,
            },
        });

        return foundUser ? User.create(foundUser) : null;
    }

    async findByUsername(username: string): Promise<User | null> {
        const foundUser = await this.prisma.user.findUnique({
            where: {
                username: username,
            },
        });

        return foundUser ? User.create(foundUser) : null;
    }
}

import { UserRepository } from "@application/repositories/user.repository";
import { PrismaService } from "@db/prisma.service";
import { User } from "@domain/entities/user.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaUserRepository extends UserRepository {
    constructor(private readonly prisma: PrismaService) {
        super();
    }

    async save(user: User): Promise<User> {
        const createdUser: User = await this.prisma.user.create({
            data: {
                ...user,
            },
        });

        return createdUser;
    }
}

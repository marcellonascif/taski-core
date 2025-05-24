import { UserRepository } from "@application/repositories/user.repository";
import { PrismaService } from "@db/prisma.service";
import { User } from "@domain/entities/user.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaUserRepository extends UserRepository {
    constructor(private readonly prisma: PrismaService) {
        super();
    }

    async findByEmail(email: string): Promise<User | null> {
        const foundUser = await this.prisma.user.findUnique({
            where: {
                email: email
            },
        });

        return foundUser
        ? User.create(foundUser)
        : null;
    }
}

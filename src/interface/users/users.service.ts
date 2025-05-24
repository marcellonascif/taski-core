import { Injectable } from '@nestjs/common';
import { PrismaService } from '@db/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(email: string): Promise<any> {
    const user = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    return user;
  }
}

import { Injectable } from "@nestjs/common";
import { UserRepository } from "@application/repositories/user.repository";
import { User } from "@domain/entities/user.entity";

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly repo: UserRepository) {}

  async execute(user: User): Promise<User> {
    return this.repo.save(user);
  }
}

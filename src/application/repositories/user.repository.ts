import { User } from "@domain/entities/user.entity";

export abstract class UserRepository {
    abstract save(user: User): Promise<User>;
}

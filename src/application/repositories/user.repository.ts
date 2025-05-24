import { User } from "@domain/entities/user.entity";

export abstract class UserRepository {
    abstract findByEmail(email: string): Promise<User | null>;
}

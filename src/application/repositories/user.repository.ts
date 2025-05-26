import { User } from '@domain/entities/user.entity';

export abstract class UserRepository {
    abstract save(user: any): Promise<User>;
    abstract findByEmail(email: string): Promise<User | null>;
    abstract findByUsername(username: string): Promise<User | null>;
}

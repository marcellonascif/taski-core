import { Injectable } from '@nestjs/common';
import { PasswordHasher } from '@application/hashers/password.hasher';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BCryptPasswordHasher extends PasswordHasher {
    private readonly saltRounds: number;
    constructor() {
        super();
        this.saltRounds = 12;
    }

    async hash(password: string): Promise<string> {
        return bcrypt.hash(password, this.saltRounds);
    }

    async compare(password: string, hashedPassword: string): Promise<boolean> {
        return bcrypt.compare(password, hashedPassword);
    }
}

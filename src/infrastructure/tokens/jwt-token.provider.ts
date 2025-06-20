import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TokenProvider } from '@application/tokens/token.provider';

@Injectable()
export class JwtTokenProvider extends TokenProvider {
    constructor(private readonly jwtService: JwtService) {
        super();
    }

    async sign(payload: any): Promise<string> {
        return await this.jwtService.signAsync(payload);
    }
}

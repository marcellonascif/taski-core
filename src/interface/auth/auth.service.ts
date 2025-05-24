import { Injectable } from '@nestjs/common';
import { SignInDto } from './dto/sign-in.dto';
import { SignInUseCase } from '@application/usecases/sign-in.usecase';

@Injectable()
export class AuthService {
    constructor(private readonly signInUseCase: SignInUseCase) {}

    async handleSignIn(signInDto: SignInDto): Promise<any> {
        const accessToken = await this.signInUseCase.execute(signInDto);

        return {
            access_token: accessToken
        }
    }
}

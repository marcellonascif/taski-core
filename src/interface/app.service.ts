import { Injectable } from '@nestjs/common';
import { SignInUseCase } from '@application/usecases/sign-in.usecase';
import { SignUpUseCase } from '@application/usecases/sign-up.usecase';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';

@Injectable()
export class AppService {
    constructor(
        private readonly signUpUseCase: SignUpUseCase,
        private readonly signInUseCase: SignInUseCase,
    ) {}

    async handleSignUp(signUpDto: SignUpDto): Promise<any> {
        const user = await this.signUpUseCase.execute(signUpDto);

        return {
            id: user.id,
            username: user.username,
            email: user.email,
            name: user.name,
        };
    }

    async handleSignIn(signInDto: SignInDto): Promise<any> {
        const accessToken = await this.signInUseCase.execute(signInDto);

        return {
            access_token: accessToken,
        };
    }
}

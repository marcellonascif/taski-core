export abstract class TokenProvider {
    abstract sign(payload: any): Promise<string>;
}

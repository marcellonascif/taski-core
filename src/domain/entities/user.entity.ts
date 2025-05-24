export class User {
  constructor(
    public readonly id: string,
    public readonly username: string,
    public readonly email: string,
    public readonly password: string,
    public readonly name: string,
  ) {}

  static create({id, username, email, password, name}): User {
    return new User(id, username, email, password, name);
  }
}

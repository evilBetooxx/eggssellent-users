export class User {
  constructor(
    public username: string,
    public password: string,
    public photo: string,
    public eggs: string[],
    public createdAt: Date,
    public updatedAt: Date,
  ) {}
}

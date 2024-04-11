import { User } from "./user";

export interface IUserRepository {
  signup(user: User): Promise<User>;
  signin(user: User): Promise<User>;
  signout(username: string): Promise<String>;
  verifyToken(token: string): Promise<String>;
  findByUsername(username: string): Promise<User>;
  update(user: User): Promise<User>;
}

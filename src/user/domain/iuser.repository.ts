import { User } from "./user";

export interface IUserRepository {
  signup(user: User): Promise<String>;
  signin(user: User): Promise<String>;
  signout(username: string): Promise<String>;
  verifyToken(token: string): Promise<String>;
  findByUsername(username: string): Promise<User>;
  updateUser(user: User): Promise<User>;
}

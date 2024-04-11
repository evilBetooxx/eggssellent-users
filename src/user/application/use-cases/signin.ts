import { IUserRepository } from "../../domain/iuser.repository";
import { IBcryptRepository } from "../services/ibycript.repository"; 
import { User } from "../../domain/user";

export class signIn {
  constructor(private userRepository: IUserRepository, private bycript: IBcryptRepository) {}

  async run(username: string, password: string): Promise<User> {
    const user = await this.userRepository.findByUsername(username);

    if (!user) {
      throw new Error("User not found");
    }

    const isMatch = await this.bycript.comparePasswords(password, user.password);

    if (!isMatch) {
      throw new Error("Invalid password");
    }
    
    return user;
  }
}

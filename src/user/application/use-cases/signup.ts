import { IUserRepository } from "../../domain/iuser.repository";
import { IBcryptRepository } from "../services/ibycript.repository";
import { User } from "../../domain/user";

export class signUp {
  constructor(private userRepository: IUserRepository, private bycriptRepository: IBcryptRepository) {}

  async run(user: User): Promise<User> {
    const userFound = await this.userRepository.findByUsername(user.username);

    if (user) {
      throw new Error("Ese usuario ya existe");
    }

    const hashedPassword = await this.bycriptRepository.hashPassword(userFound.password);

    userFound.password = hashedPassword;

    return this.userRepository.signup(userFound);
  }
}
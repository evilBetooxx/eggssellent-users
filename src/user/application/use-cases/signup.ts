import { IUserRepository } from "../../domain/iuser.repository";
import { IBcryptRepository } from "../services/ibycript.repository";
import { User } from "../../domain/user";

export class signUp {
  constructor(
    private userRepository: IUserRepository,
    private bycriptRepository: IBcryptRepository
  ) {}

  async run(username: string, password: string): Promise<User> {
    const userFound = await this.userRepository.findByUsername(username);

    if (userFound) {
      throw new Error("Ese usuario ya existe");
    }

    const hashedPassword = await this.bycriptRepository.hashPassword(password);
    const photo =
      "https://res.cloudinary.com/dn1ng7anm/image/upload/v1712853103/_714420ed-0f96-4a86-8f68-66d52efb8620_ee9s5s.jpg";

    const user = new User(
      username,
      hashedPassword,
      photo,
      [],
      new Date(),
      new Date()
    );
    console.log(user);
    return this.userRepository.signup(user);
  }
}

import { IUserRepository } from "../../domain/iuser.repository";
import { User } from "../../domain/user";

export class update {
  constructor(private userRepository: IUserRepository) {}

  async run(user: User): Promise<User> {
    return this.userRepository.update(user);
  }
}
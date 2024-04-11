import { IUserRepository } from "../../domain/iuser.repository";

export class signOut {
  constructor(private userRepository: IUserRepository) {}

  async run(username: string): Promise<String> {
    return this.userRepository.signout(username);
  }
}
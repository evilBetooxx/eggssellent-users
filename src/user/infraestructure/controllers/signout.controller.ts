import { Request, Response } from "express";
import { signOut } from "../../application/use-cases/signout";

export class SignOutController {
  constructor(private signOutUseCase: signOut) {}

  async run(req: Request, res: Response) {
    const { username } = req.body;

    try {
      const message = await this.signOutUseCase.run(username);
      res.status(200).json({ message });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}
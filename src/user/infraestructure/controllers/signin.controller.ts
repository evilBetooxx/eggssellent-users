import { Request, Response } from "express";
import { signIn } from "../../application/use-cases/signin";

export class SignInController {
  constructor(private signInUseCase: signIn) {}

  async run(req: Request, res: Response) {
    const { username, password } = req.body;
    try {
      const user = await this.signInUseCase.run(username, password);
      res.status(200).json(user);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}
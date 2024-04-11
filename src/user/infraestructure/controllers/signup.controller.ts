import { Request, Response } from "express";
import { signUp } from "../../application/use-cases/signup";

export class SignUpController {
  constructor(private signUpUseCase: signUp) {}

  async run(req: Request, res: Response) {
    try {
      const user = await this.signUpUseCase.run(req.body);
      res.status(200).json(user);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}
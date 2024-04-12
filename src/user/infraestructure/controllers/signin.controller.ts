import { Request, Response } from "express";
import { signIn } from "../../application/use-cases/signin";
import { JsonWebTokenUtility } from "../utilities/jsonwebtoken.utility";

const jwt = new JsonWebTokenUtility();

export class SignInController {
  constructor(private signInUseCase: signIn) {}

  async run(req: Request, res: Response) {
    const { username, password } = req.body;
    try {
      const user = await this.signInUseCase.run(username, password);
      const token = await jwt.signToken({ username: user.username });
      console.log(token)
      res.cookie('token', token, {
        httpOnly: true,
        secure: true,
        maxAge: 24 * 60 * 60 * 1000,
      });
      res.status(200).json(user);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}
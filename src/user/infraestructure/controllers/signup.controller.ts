import { Request, Response } from "express";
import { signUp } from "../../application/use-cases/signup";
import { JsonWebTokenUtility } from "../utilities/jsonwebtoken.utility";

const jwt = new JsonWebTokenUtility();

export class SignUpController {
  constructor(private signUpUseCase: signUp) {}

  async run(req: Request, res: Response) {
    const { username, password } = req.body;
    try {
      const user = await this.signUpUseCase.run(username, password);
      const token = await jwt.signToken({ username: user.username });
      res.cookie('token', token, {
        httpOnly: true,
        secure: true,
        maxAge: 24 * 60 * 60 * 1000,
      });
      res.status(200).json(user);
    } catch (error: any) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
  }
}

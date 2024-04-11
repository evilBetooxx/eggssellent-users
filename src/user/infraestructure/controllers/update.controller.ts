import { Request, Response } from "express";
import { update } from "../../application/use-cases/update";

export class UpdateController {
  constructor(private updateUseCase: update) {}

  async run(req: Request, res: Response) {
    try {
      const user = await this.updateUseCase.run(req.body);
      res.status(200).json(user);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}
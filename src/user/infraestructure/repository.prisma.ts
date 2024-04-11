import { PrismaClient } from "@prisma/client";
import { IUserRepository } from "../domain/iuser.repository";
import { User } from "../domain/user";

export class UserRepositoryPrisma implements IUserRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async signup(user: User): Promise<User> {
    const userSaved = await this.prisma.user.create({
      data: {
        username: user.username,
        password: user.password,
        photo: user.photo,
        eggs: user.eggs,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    });

    if (!userSaved) {
      throw new Error("Ocurrió un error al guardar el usuario");
    }

    return new User(
      userSaved.username,
      userSaved.password,
      userSaved.photo,
      userSaved.eggs,
      userSaved.createdAt,
      userSaved.updatedAt
    );
  }

  async signin(user: User): Promise<User> {
    const userSaved = await this.prisma.user.findFirst({
      where: {
        username: user.username,
      },
    });

    if (!userSaved) {
      throw new Error("Invalid credentials");
    }

    return new User(
      userSaved.username,
      userSaved.password,
      userSaved.photo,
      userSaved.eggs,
      userSaved.createdAt,
      userSaved.updatedAt
    );
  }

  async signout(username: string): Promise<String> {
    return "Signout";
  }

  async verifyToken(token: string): Promise<String> {
    return "VerifyToken";
  }

  async findByUsername(username: string): Promise<any> {
    const userSaved = await this.prisma.user.findFirst({
      where: {
        username: username,
      },
    });

    if (!userSaved) {
      return null;
    }

    return new User(
      userSaved.username,
      userSaved.password,
      userSaved.photo,
      userSaved.eggs,
      userSaved.createdAt,
      userSaved.updatedAt
    );
  }

  async update(user: User): Promise<User> {
    const userSaved = await this.prisma.user.update({
      where: {
        username: user.username,
      },
      data: {
        password: user.password,
        photo: user.photo,
        eggs: user.eggs,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    });

    return new User(
      userSaved.username,
      userSaved.password,
      userSaved.photo,
      userSaved.eggs,
      userSaved.createdAt,
      userSaved.updatedAt
    );
  }
}

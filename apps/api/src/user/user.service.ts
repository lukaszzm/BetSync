import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { hash } from "bcrypt";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateUserDto) {
    const userExists = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (userExists) {
      throw new ConflictException("User with this email already exists");
    }

    const newUser = await this.prisma.user.create({
      data: {
        ...dto,
        password: await hash(dto.password, 10),
      },
    });

    const { password: _password, ...result } = newUser;

    return result;
  }

  async findByEmail(email: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new NotFoundException("User not found");
    }

    return user;
  }

  async findById(id: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      throw new NotFoundException("User not found");
    }

    const { password, ...rest } = user;

    return rest;
  }

  async incrementBalance(id: string, value: number) {
    return await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        balance: {
          increment: value,
        },
      },
    });
  }

  async decrementBalance(id: string, value: number) {
    return await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        balance: {
          decrement: value,
        },
      },
    });
  }
}

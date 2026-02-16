import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAccountDto } from './dtos/create-account.dto';

@Injectable()
export class AccountsService {
  constructor(private prismaService: PrismaService) {}
  async create(data: CreateAccountDto) {
    return this.prismaService.clientAccount.create({
      data,
    });
  }

  findAll() {
    return this.prismaService.clientAccount.findMany();
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { XmlStrategies } from './enums/xml-strategies.enum';
import { XmlComposingStrategyFactory } from './factories/xml-composing-strategy.factory';
import { XmlManagerService } from '../common/xml-manager/xml-manager.service';
import { PrismaService } from '../prisma/prisma.service';
import { plainToInstance } from 'class-transformer';
import { Prisma } from '@prisma/client';

@Injectable()
export class TransactionsService {
  constructor(
    private readonly xmlManagerService: XmlManagerService,
    private prismaService: PrismaService,
  ) {}

  async create(createTransactionDto: CreateTransactionDto) {
    const account = await this.getClientAccount(createTransactionDto);
    const data = plainToInstance(CreateTransactionDto, createTransactionDto);
    const transactionData: Prisma.TransactionCreateInput = {
      ...data,
      clientAccount: { connect: { id: account.id } },
    };

    const transaction = await this.prismaService.transaction.create({
      data: transactionData,
    });

    const strategy = XmlComposingStrategyFactory.getStrategy(
      XmlStrategies.TRANSACTION,
    );
    this.xmlManagerService.generateXml(transaction, strategy);
    return transaction;
  }

  private async getClientAccount(createTransactionDto: CreateTransactionDto) {
    const account = await this.prismaService.clientAccount.findFirst({
      where: { accountNumber: createTransactionDto.accountNumber },
    });
    if (account === null) {
      throw new NotFoundException(
        "account with the provided account number doesn't exist",
      );
    }
    return account;
  }

  async findAll() {
    return this.prismaService.transaction.findMany();
  }

  findOne(id: string) {
    return this.prismaService.transaction.findUnique({ where: { id } });
  }
}

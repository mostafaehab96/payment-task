import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './entities/transaction.entity';
import { randomUUID } from 'node:crypto';
import { XmlStrategies } from './enums/xml-strategies.enum';
import { XmlComposingStrategyFactory } from './factories/xml-composing-strategy.factory';
import { XmlManagerService } from '../common/xml-manager/xml-manager.service';

@Injectable()
export class TransactionsService {
  constructor(private readonly xmlManagerService: XmlManagerService) {}
  transactions: Transaction[] = [];

  create(createTransactionDto: CreateTransactionDto) {
    const transaction = { ...createTransactionDto } as Transaction;
    transaction.reference = randomUUID();
    transaction.date = new Date();
    this.transactions.push(transaction);
    const strategy = XmlComposingStrategyFactory.getStrategy(
      XmlStrategies.TRANSACTION,
    );
    this.xmlManagerService.generateXml(transaction, strategy);
    return transaction;
  }

  findAll() {
    return `This action returns all transactions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transaction`;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './entities/transaction.entity';
import { randomUUID } from 'node:crypto';
import { generateXml } from '../common/utils/generate-xml.util';
import { XmlStrategies } from './enums/xml-strategies.enum';
import { XmlComposingStrategyFactory } from './factories/xml-composing-strategy.factory';

@Injectable()
export class TransactionsService {
  transactions: Transaction[] = [];

  create(createTransactionDto: CreateTransactionDto) {
    const transaction = { ...createTransactionDto } as Transaction;
    transaction.reference = randomUUID();
    transaction.date = new Date();
    this.transactions.push(transaction);
    const strategy = XmlComposingStrategyFactory.getStrategy(
      XmlStrategies.TRANSACTION,
    );
    generateXml(transaction, strategy);
    return transaction;
  }

  findAll() {
    return `This action returns all transactions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transaction`;
  }
}

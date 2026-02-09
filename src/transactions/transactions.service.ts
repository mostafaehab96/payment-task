import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from '../dto/create-transaction.dto';
import { UpdateTransactionDto } from '../dto/update-transaction.dto';
import { Transaction } from '../entities/transaction.entity';
import { randomUUID } from 'node:crypto';
import { create } from 'xmlbuilder2';

@Injectable()
export class TransactionsService {
  transactions: Transaction[] = [];

  create(createTransactionDto: CreateTransactionDto) {
    const transaction = { ...createTransactionDto } as Transaction;
    transaction.reference = randomUUID();
    transaction.date = new Date();
    this.transactions.push(transaction);
    try {
      const obj = {
        TransferInfo: {
          ...transaction,
        },
      };
      const doc = create(obj);
      const xml = doc.end({ prettyPrint: true });
      console.log(xml);
    } catch (error) {
      console.error('Error converting transaction to XML:', error);
    }

    return transaction;
  }

  findAll() {
    return `This action returns all transactions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transaction`;
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}

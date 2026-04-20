import { TransactionParsingInterface } from '../interfaces/transaction-parsing.interface';
import { TransactionLineInterface } from '../interfaces/transaction-line.interface';

export class AcmeBankParsingStrategy implements TransactionParsingInterface {
  parse(transactionString: string): TransactionLineInterface {
    const transactionParts = transactionString.split('//');
    const amount = Number(transactionParts[0].replace(',', '.'));
    const reference = transactionParts[1];
    const date = transactionParts[2];

    return { date, amount, reference };
  }
}

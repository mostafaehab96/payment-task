import { TransactionParsingInterface } from '../interfaces/transaction-parsing.interface';
import { TransactionLineInterface } from '../interfaces/transaction-line.interface';

export class PaytechParsingStrategy implements TransactionParsingInterface {
  parse(transactionString: string): TransactionLineInterface {
    const dateAndAmount = transactionString.split('#')[0];
    const date = dateAndAmount.substring(0, 8);
    const amount = Number(dateAndAmount.substring(8).replace(',', '.'));
    const reference = transactionString.split('#')[1];
    const info = transactionString.split('#')[2].split('/');
    const infoMap = {};
    for (let i = 0; i < info.length; i += 2) {
      if (i % 2 === 0) {
        infoMap[info[i]] = info[i + 1];
      }
    }

    return { date, amount, reference, info: infoMap };
  }
}

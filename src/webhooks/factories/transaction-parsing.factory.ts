import { TransactionParsingInterface } from '../interfaces/transaction-parsing.interface';
import { PaytechParsingStrategy } from '../strategies/paytech-parsing.strategy';

export class TransactionParsingFactory {
  public static getParsingStrategy(
    transactionType: string,
  ): TransactionParsingInterface {
    switch (transactionType) {
      case 'pay-tech':
        return new PaytechParsingStrategy();
      default:
        throw new Error(`Unsupported transaction type: ${transactionType}`);
    }
  }
}

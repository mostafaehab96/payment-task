import { TransactionParsingInterface } from '../interfaces/transaction-parsing.interface';
import { PaytechParsingStrategy } from '../strategies/paytech-parsing.strategy';
import { AcmeBankParsingStrategy } from '../strategies/acme-parsing.strategy';

export class TransactionParsingFactory {
  public static getParsingStrategy(
    transactionType: string,
  ): TransactionParsingInterface {
    switch (transactionType) {
      case 'pay-tech':
        return new PaytechParsingStrategy();
      case 'acme':
        return new AcmeBankParsingStrategy();
      default:
        throw new Error(`Unsupported transaction type: ${transactionType}`);
    }
  }
}

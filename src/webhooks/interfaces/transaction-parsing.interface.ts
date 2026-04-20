import { TransactionLineInterface } from './transaction-line.interface';

export interface TransactionParsingInterface {
  parse(transactionString: string): TransactionLineInterface;
}

export interface TransactionLineInterface {
  date: string;
  amount: number;
  reference: string;
  info?: Record<string, string>
}

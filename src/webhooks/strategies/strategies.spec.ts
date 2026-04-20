import { PaytechParsingStrategy } from './paytech-parsing.strategy';
import { TransactionParsingInterface } from '../interfaces/transaction-parsing.interface';

describe('Strategies tests', () => {
  let strategy: TransactionParsingInterface;

  it('should parse Paytech transaction correctly', () => {
    strategy = new PaytechParsingStrategy();
    const transactionLine = `20250615156,50#202506159000001#note/debt payment march/internal_reference/A462JE81`;
    const expectedResult = {
      date: '20250615156',
      amount: 50,
      reference: '202506159000001',
      info: {
        note: 'debt payment march',
        internal_reference: 'A462JE81',
      },
    };
    const result = strategy.parse(transactionLine);
    expect(result).toEqual(expectedResult);
  });
});

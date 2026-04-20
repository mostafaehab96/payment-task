import { TransactionParsingInterface } from '../interfaces/transaction-parsing.interface';
import { TransactionParsingFactory } from '../factories/transaction-parsing.factory';

describe('Strategies tests', () => {
  let strategy: TransactionParsingInterface;

  it('should parse Paytech transaction correctly', () => {
    strategy = TransactionParsingFactory.getParsingStrategy('pay-tech');
    const transactionLine = `20250615156,50#202506159000001#note/debt payment march/internal_reference/A462JE81`;
    const expectedResult = {
      date: '20250615',
      amount: 156.5,
      reference: '202506159000001',
      info: {
        note: 'debt payment march',
        internal_reference: 'A462JE81',
      },
    };
    const result = strategy.parse(transactionLine);
    expect(result).toEqual(expectedResult);
  });

  it('should parse acmeBank transaction correctly', () => {
    strategy = TransactionParsingFactory.getParsingStrategy('acme');
    const transactionLine = `156,50//202506159000001//20250615`;
    const expectedResult = {
      date: '20250615',
      amount: 156.5,
      reference: '202506159000001',
    };
    const result = strategy.parse(transactionLine);
    expect(result).toEqual(expectedResult);
  });
});

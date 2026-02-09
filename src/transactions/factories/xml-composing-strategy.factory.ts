import { TransactionXmlComposingStrategy } from '../strategies/transaction-xml-comosing.strategy';
import { XmlComposingStrategyInterface } from '../../common/interfaces/xml-composing-strategy.interface';

export class XmlComposingStrategyFactory {
  static getStrategy(type: string): XmlComposingStrategyInterface {
    switch (type) {
      case 'transaction':
        return new TransactionXmlComposingStrategy();
      default:
        throw new Error(`Unknown XML composing strategy type: ${type}`);
    }
  }
}

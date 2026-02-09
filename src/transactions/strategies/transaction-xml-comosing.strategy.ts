import { XmlComposingStrategyInterface } from '../../common/interfaces/xml-composing-strategy.interface';
import { Transaction } from '../entities/transaction.entity';

export class TransactionXmlComposingStrategy implements XmlComposingStrategyInterface {
  composeXml(transaction: Transaction) {
    const obj = {
      PaymentRequestMessage: {
        TransferInfo: {
          Reference: transaction.reference,
          Date: transaction.date.toISOString(),
          Amount: transaction.amount,
          Currency: transaction.currency,
        },
        SenderInfo: {
          AccountNumber: transaction.senderAccountNumber,
        },
        ReceiverInfo: {
          BankCode: transaction.recipientBankCode,
          AccountNumber: transaction.recipientAccountNumber,
          BeneficiaryName: transaction.beneficiaryName,
        },
      },
    };
    if (transaction.notes && transaction.notes.length > 0) {
      obj.PaymentRequestMessage['Notes'] = {
        Note: transaction.notes,
      };
    }
    if (transaction.paymentType !== '99') {
      obj.PaymentRequestMessage['PaymentType'] = transaction.paymentType;
    }
    if (transaction.chargeDetails !== 'SHA') {
      obj.PaymentRequestMessage['ChargeDetails'] = transaction.chargeDetails;
    }
    const filename = `transaction_${transaction.reference}.xml`;
    return { obj, filename };
  }
}

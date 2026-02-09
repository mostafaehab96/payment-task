export class Transaction {
  reference: string;
  date: Date;
  amount: number;
  currency: string;
  senderAccountNumber: string;
  recipientBankCode: string;
  recipientAccountNumber: string;
  beneficiaryName: string;
  notes?: string[];
  paymentType: string;
  chargeDetails: string;
}

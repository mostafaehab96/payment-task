export class CreateTransactionDto {
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

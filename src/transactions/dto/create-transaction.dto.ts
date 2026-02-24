import {
  IsString,
  IsNumberString,
  IsDateString,
  IsArray,
  IsNumber,
  IsOptional
} from 'class-validator';
import { Exclude } from 'class-transformer';

export class CreateTransactionDto {
  @IsString()
  reference: string;
  @IsDateString()
  date: Date;
  @IsNumber()
  amount: number;
  @IsString()
  currency: string;
  @Exclude()
  accountNumber: string;
  @IsString()
  recipientBankCode: string;
  @IsNumberString()
  recipientAccountNumber: string;
  @IsString()
  beneficiaryName: string;
  @IsOptional()
  @IsArray()
  notes?: string[];
  @IsString()
  paymentType: string;
  @IsString()
  chargeDetails: string;
  @IsString()
  transactionStatus: string;
  @IsString()
  transactionType: string;
}

import { IsString, IsNumberString, IsDecimal } from 'class-validator';

export class CreateAccountDto {
  @IsString()
  name: string;

  @IsNumberString()
  accountNumber: string;

  @IsDecimal()
  amount: number;

  @IsString()
  bankCode: string;
}

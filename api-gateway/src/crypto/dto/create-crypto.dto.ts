import { IsNotEmpty, IsNumberString } from 'class-validator';

export class CreateCryptoDto {
  @IsNotEmpty()
  timestamp: string;

  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  cryptoName: string;

  @IsNotEmpty()
  @IsNumberString()
  amount: number;

  @IsNotEmpty()
  transactionType: string;
}

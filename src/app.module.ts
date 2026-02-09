import { Module } from '@nestjs/common';
import { TransactionsModule } from './transactions/transactions.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [TransactionsModule, CommonModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

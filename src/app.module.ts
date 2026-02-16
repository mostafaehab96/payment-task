import { Module } from '@nestjs/common';
import { TransactionsModule } from './transactions/transactions.module';
import { CommonModule } from './common/common.module';
import { WebhooksModule } from './webhooks/webhooks.module';
import { AccountsModule } from './accounts/accounts.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    TransactionsModule,
    CommonModule,
    WebhooksModule,
    AccountsModule,
    PrismaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

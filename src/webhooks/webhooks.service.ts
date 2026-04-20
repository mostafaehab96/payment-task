import { Injectable } from '@nestjs/common';
import { ReceiveTransactionWebhookDto } from './dto/receive-transaction-webhook.dto';

@Injectable()
export class WebhooksService {
  create(createWebhookDto: ReceiveTransactionWebhookDto) {
    return 'This action adds a new webhook';
  }

  findAll() {
    return `This action returns all webhooks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} webhook`;
  }


  remove(id: number) {
    return `This action removes a #${id} webhook`;
  }
}

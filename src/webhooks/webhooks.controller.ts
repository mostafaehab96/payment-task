import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { WebhooksService } from './webhooks.service';
import { ReceiveTransactionWebhookDto } from './dto/receive-transaction-webhook.dto';

@Controller('webhooks')
export class WebhooksController {
  constructor(private readonly webhooksService: WebhooksService) {}

  @Post()
  create(@Body() createWebhookDto: ReceiveTransactionWebhookDto) {
    return this.webhooksService.create(createWebhookDto);
  }

  @Get()
  findAll() {
    return this.webhooksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.webhooksService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.webhooksService.remove(+id);
  }
}

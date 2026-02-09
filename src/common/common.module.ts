import { Module } from '@nestjs/common';
import { XmlManagerService } from './xml-manager/xml-manager.service';

@Module({
  providers: [XmlManagerService],
  exports: [XmlManagerService],
})
export class CommonModule {}

import { Test, TestingModule } from '@nestjs/testing';
import { XmlManagerService } from './xml-manager.service';

describe('XmlManagerService', () => {
  let service: XmlManagerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [XmlManagerService],
    }).compile();

    service = module.get<XmlManagerService>(XmlManagerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test } from '@nestjs/testing';
import { DataClientService } from './data-client.service';

describe('DataClientService', () => {
  let service: DataClientService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [DataClientService],
    }).compile();

    service = module.get(DataClientService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});

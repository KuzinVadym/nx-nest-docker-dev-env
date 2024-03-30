import { Injectable } from '@nestjs/common';
import { DataClientService } from 'data-client';

@Injectable()
export class AppService {
  constructor(
    private dataClientService: DataClientService
  ){}

  async getData(): Promise<{ message: string }> {
    
    const temp = await this.dataClientService.getData();
    
    return { message: 'Hello from Gateway API!' + ' end' + ` ${temp.message}` };
  }
}

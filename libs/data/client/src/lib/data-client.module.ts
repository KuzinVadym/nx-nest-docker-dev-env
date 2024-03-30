import { Module } from '@nestjs/common';
import { DataClientService } from './data-client.service';

@Module({
  controllers: [],
  providers: [DataClientService],
  exports: [DataClientService],
})
export class DataClientModule {}

import { Module } from '@nestjs/common';
import { CounterService } from './counter.service';
import { CounterController } from './counter.controller';

@Module({
  imports: [],
  controllers: [CounterController],
  providers: [CounterService],
})
export class CounterModule {}

import { Body, Controller, Post } from '@nestjs/common';
import { AppDto } from './dto';
import { CounterService } from './counter.service';

@Controller('counter')
export class CounterController {
  constructor(private readonly counterService: CounterService) {}

  @Post()
  getData(@Body() { value }: AppDto) {
    return this.counterService.updateCounter(value);
  }
}

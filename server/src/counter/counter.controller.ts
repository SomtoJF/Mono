import { Body, Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppDto } from './dto';
import { CounterService } from './counter.service';

@Controller('counter')
export class CounterController {
  constructor(private readonly counterService: CounterService) {}

  @Post()
  getData(@Body() { value }: AppDto, @Req() request: Request) {
    console.log(request);
    return this.counterService.updateCounter(value);
  }
}

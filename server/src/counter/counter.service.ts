import { Injectable } from '@nestjs/common';

@Injectable()
export class CounterService {
  constructor() {}

  async updateCounter(value: number) {
    console.log(value);
    return value;
  }
}

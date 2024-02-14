import { Inject, Injectable } from '@nestjs/common';
import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';

@Injectable()
export class CounterService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async updateCounter(value: number) {
    await this.cacheManager.set('counter', value, 1000000);
    return value;
  }
}

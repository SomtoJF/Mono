import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {}

  sayHello() {
    console.log('Hello');
    return 'Hello';
  }
}

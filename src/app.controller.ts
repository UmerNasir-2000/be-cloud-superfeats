import { Controller, Get } from '@nestjs/common';

@Controller()
export default class AppController {
  @Get()
  getHello() {
    return { message: 'Welcome to Superfeats' };
  }
}

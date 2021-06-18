import { Controller, Get } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('Users') // Our topic name
  getHello(@Payload() message) {
    console.log(message.value);
    return 'Hello World';
  }

}

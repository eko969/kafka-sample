import { Controller, Get, Logger } from '@nestjs/common';
import { Ctx, KafkaContext, MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  private logger = new Logger(AppController.name);

  @MessagePattern('Users') // Our topic name
  getHello(@Payload() message, @Ctx() context: KafkaContext) {
    const originalMessage = context.getMessage();
    this.logger.log(message);
    this.logger.log(`original msg: ${originalMessage}`);
    
    return 'Hello World! 1';
  }

}

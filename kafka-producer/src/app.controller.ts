import { Controller, Get } from '@nestjs/common';
import { Client, ClientKafka, Transport } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'sampleAppProducer',
        brokers: [process.env.KAFKA_SERVER],
      },
      consumer: {
        groupId: 'my-kafka'
      }
    }
  })
  client: ClientKafka;

  async onModuleInit() {
    this.client.subscribeToResponseOf('Users');
    await this.client.connect();
  }

  @Get()
  async getHello(): Promise<any> {
    return await this.client.send("Users", "Hello!!");
  }
}

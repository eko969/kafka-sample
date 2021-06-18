import { Injectable } from '@nestjs/common';
import { Client, ClientKafka, Transport } from '@nestjs/microservices';

@Injectable()
export class AppService {

  constructor(

  ){}

  getHello(): string {
    return 'Hello World!';
  }
}

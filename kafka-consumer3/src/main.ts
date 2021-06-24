import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: "sampleAppConsumer",
        brokers: [process.env.KAFKA_SERVER],
      },
      consumer: {
        groupId: 'my-kafka-3',
      },
    }
  });

  app.listen(() => console.log("Kafka consumer service is listening!"))
}
bootstrap();

import * as dotenv from 'dotenv';
dotenv.config();
import { Kafka } from "kafkajs";
import winston from "winston";

export const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
    }),
  ],
});

const broker1 = process.env.KAFKA_SERVER || "kafka:9092";

async function run() {
  try {
    const kafka = new Kafka({
      "clientId": "sampleAppAdmin",
      "brokers": [broker1]
    });

    const admin = await kafka.admin();
    logger.info("connecting....");
    admin.connect();
    logger.info("connected!");
    admin.createTopics({
      "topics": [{
        "topic": "Users",
        "numPartitions": 3
      }],
    });
    logger.info("Done create topic!");
    admin.disconnect();
    
  } catch (e) {
    console.error(e)
  }finally{
    process.exit(0);
  }
}

run()
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const workingDirectory = process.cwd();
  const zeebeProtoPath = `${workingDirectory}/zeebe.proto`;
  const listenUrl = process.env.LISTEN_URL ?? '0.0.0.0:26500';

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        url: listenUrl,
        protoPath: zeebeProtoPath,
        package: 'gateway_protocol',
      },
    },
  );

  app.listen();
}
bootstrap();

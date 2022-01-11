import { Module } from '@nestjs/common';
import { GatewayController } from './gateway.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [GatewayController],
  providers: [AppService],
})
export class AppModule {}

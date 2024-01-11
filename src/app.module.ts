import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentsModule } from './payments/payments.module';
import { ControllersController } from './src/payments/controllers/controllers.controller';

@Module({
  imports: [PaymentsModule],
  controllers: [AppController, ControllersController],
  providers: [AppService],
})
export class AppModule {}

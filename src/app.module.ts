import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReservaModule } from './reserva/reserva.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://root:root@cluster0.unfta.mongodb.net/CanchaSinteticas',{
      useNewUrlParser: true
    }),
    ReservaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

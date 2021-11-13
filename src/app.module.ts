import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://root:root@cluster0.unfta.mongodb.net/CanchaSinteticas',{
      useNewUrlParser: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

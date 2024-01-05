import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TelegrafModule } from 'nestjs-telegraf';
import { PosteriorsService } from './ErrorGet/posteriors.service';
import { PosteriorsModule } from './ErrorGet/posteriorsModule';

@Module({
  imports: [
    TelegrafModule.forRootAsync({
      useFactory: () => ({
        token: '2133674057:AAFzBtqeKLwueJldH_Did8_VaQ97HNaCxjw',
      }),
    }),
    PosteriorsModule,
  ],
  controllers: [AppController],
  providers: [AppService, PosteriorsService],
})
export class AppModule {}

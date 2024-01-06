import { Module } from '@nestjs/common';
import { AppUpdate } from './app.update';
import { AppService } from './app.service';
import { TelegrafModule } from 'nestjs-telegraf';
import { PosteriorsService } from './ErrorGet/posteriors.service';
import { PosteriorsModule } from './ErrorGet/posteriors.module';

@Module({
  imports: [
    TelegrafModule.forRootAsync({
      useFactory: () => ({
        token: '2133674057:AAFzBtqeKLwueJldH_Did8_VaQ97HNaCxjw',
      }),
    }),
    PosteriorsModule,
  ],
  providers: [AppService, PosteriorsService, AppUpdate],
})
export class AppModule {}

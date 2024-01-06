import { Injectable } from '@nestjs/common';
import { Context } from 'telegraf';

@Injectable()
export class AppService {
  async getHello(ctx: Context) {
    await ctx.reply('Добро пожаловать, управляй апи с этого бота!');
  }

  async getError(ctx: Context, error: string) {
    await ctx.reply(error);
  }
}

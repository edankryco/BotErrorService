import { AppService } from './app.service';
import { InjectBot, Start, Update, Help } from 'nestjs-telegraf';
import { Context, Telegraf } from 'telegraf';

@Update()
export class AppUpdate {
  constructor(
    @InjectBot() private readonly bot: Telegraf<Context>,
    private readonly appService: AppService,
  ) {}

  @Start()
  async getHello(ctx: Context) {
    return await this.appService.getHello(ctx);
  }

  @Help()
  async getError(ctx: Context, data: string) {
    return await this.appService.getError(ctx, data);
  }
}

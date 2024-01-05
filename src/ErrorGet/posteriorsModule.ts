import { Module } from '@nestjs/common';
import { PosteriorsController } from './posteriorsController';
import { PosteriorsService } from './posteriors.service';

@Module({
  controllers: [PosteriorsController],
  providers: [PosteriorsService],
})
export class PosteriorsModule {}

import { Module } from '@nestjs/common';
import { PosteriorsController } from './posteriors.controller';
import { PosteriorsService } from './posteriors.service';
import { DataService } from '../Bot/DataService';

@Module({
  controllers: [PosteriorsController],
  providers: [PosteriorsService, DataService],
})
export class PosteriorsModule {}

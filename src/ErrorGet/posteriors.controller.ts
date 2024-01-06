import { Body, Controller, Inject, Post } from '@nestjs/common';
import { PosteriorsService } from './posteriors.service';
import { DataService } from '../Bot/DataService';

@Controller('api')
export class PosteriorsController {
  constructor(
    @Inject(DataService) private readonly dataService: DataService,
    private readonly getErrorsService: PosteriorsService,
  ) {}
  @Post('errors')
  PostErrors(@Body() data: any) {
    this.dataService.setData(data);
    return this.getErrorsService.PostErrors(data);
  }
}

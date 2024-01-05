import { Body, Controller, Post } from '@nestjs/common';
import { PosteriorsService } from './posteriors.service';

@Controller('api')
export class PosteriorsController {
  constructor(private readonly getErrorsService: PosteriorsService) {}
  @Post('errors')
  PostErrors(@Body() data: any) {
    return this.getErrorsService.PostErrors(data);
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class PosteriorsService {
  PostErrors(data: string) {
    console.log(data);
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class DataService {
  public data: any;

  setData(Data: any) {
    this.data = Data;
  }

  getData() {
    return this.data;
  }
}

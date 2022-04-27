import { Injectable } from '@nestjs/common';

// service는 ?
@Injectable()
export class AppService {
  //또 클래스선언
  getHello(): string {
    return 'Hello 노마드!';
  }

  //마지막

  getHi(): string {
    return 'Hi Nest';
  }
}

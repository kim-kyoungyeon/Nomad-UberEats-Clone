import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
//controller는 함수를 이용해 url을 가져오는 용도
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // router.get 임.
  getHello(): string {
    //타입을설정? typescript
    return this.appService.getHello();
  }

  //데코레이터와 함수사이에 빈칸이나 줄있으먼안돼!
  @Post('/hello')
  sayHello(): string {
    //return 'Hello evryone';
    return this.appService.getHi();
  }

  // @Post('/'){

  // }
}

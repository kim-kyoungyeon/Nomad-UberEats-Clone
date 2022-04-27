import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//시작점 - maints에서 모든게 시작된다
//하나의 모듈에서 어플리케이션이 실행된다
//root 모듈이다
// 모듈은 어플리케이션의 일부
//앱의 일부 역할을 맡아서 하는 게 모듈
//인증- usermodule , photomodule,videomodule등 데이터 테이블에 따라 하나씩!
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //appmoudle을 호출한다.
  await app.listen(3000);
}
bootstrap();

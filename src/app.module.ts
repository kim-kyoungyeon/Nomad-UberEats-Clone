import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { PodcastsController } from './podcasts/podcasts.controller';
import { MoviesService } from './movies/movies.service';
import { PodcastsService } from './podcasts/podcasts.service';

//데코레이터 - 어노테이션과 같은 역할
// 클래스에 함수를 더해준다 토핑개념

@Module({
  imports: [],
  controllers: [MoviesController, PodcastsController], //nodejs의 express에서 라우터 역활과 같음
  providers: [MoviesService, PodcastsService], //service 를 제공
})
export class AppModule {}

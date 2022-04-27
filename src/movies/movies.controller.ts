import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies') // entry point를컨트롤하는 컨트롤러
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get() // express router
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }
  @Get('search') //하단 배치시 serach를 id로 착각하기에 search함수를 위로 올려준다.
  search(@Query('year') searchingYear: string) {
    return `We are searching for a movie made after : ${searchingYear}`;
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string): Movie {
    //param을 설정해 url 에 있는 id parameter를 찾아준다.
    return this.moviesService.getOne(movieId);
  }
  @Post()
  create(@Body() movieData) {
    return this.moviesService.create(movieData);
  }
  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return this.moviesService.deleteOne(movieId);
  }

  //@Put()// update all
  // 리소스 일부만 update

  //정보를 알고싶으면 꼭 요청에 넣어야함.
  @Patch(':id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    //return `This will patch a movie with the id: ${movieId}`;
    return this.moviesService.update(movieId, updateData);
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';

import { Movie } from './entities/movie.entity';
//가짜 db 생성중
@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    const movie = this.movies.find((movie) => movie.id === +id); //parseInt(id)
    //유저가 없는 id를 조회했을때 error 표시
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }
    return movie;
  }
  deleteOne(id: string) {
    this.getOne(id);
    this.movies = this.movies.filter((movies) => movies.id !== +id);
    return true;
  }
  create(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }
  update(id: string, updateData) {
    // 문제가 있는, id 에 맞는 movie를 가져온다
    const movie = this.getOne(id);
    //가져온 movie를 지운다.
    this.deleteOne(id);
    //새로운 movie를 만든다. 과거의 movie들과 새로운updatedata를 update.
    this.movies.push({ ...movie, ...updateData });
  }
}

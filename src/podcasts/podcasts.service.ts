import { Injectable, NotFoundException } from '@nestjs/common';

import { Podcast } from './entities/podcast.entity';

@Injectable()
export class PodcastsService {
  private podcasts: Podcast[] = [];

  getAll(): Podcast[] {
    return this.podcasts;
  }

  getOne(id: string): Podcast {
    const episode = this.podcasts.find((podcast) => podcast.id === +id); //parseInt(id)

    //유저가 없는 id를 조회했을때 error 표시
    if (!episode) {
      throw new NotFoundException(`Movie with ID ${episode} not found`);
    }
    return episode;
  }
  deleteOne(id: string) {
    this.getOne(id);
    this.podcasts = this.podcasts.filter((podcasts) => podcasts.id !== +id);
    return true;
  }
  create(posdcastsData) {
    this.podcasts.push({
      id: this.podcasts.length + 1,
      ...posdcastsData,
    });
  }
  update(id: string, updateData) {
    // 문제가 있는, id 에 맞는 movie를 가져온다
    const podcast = this.getOne(id);
    //가져온 movie를 지운다.
    this.deleteOne(id);
    //새로운 movie를 만든다. 과거의 movie들과 새로운updatedata를 update.
    this.podcasts.push({ ...podcast, ...updateData });
  }
}

import {
  Controller,
  Body,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Episode } from './entities/episode.entity';
import { Podcast } from './entities/podcast.entity';

import { PodcastsService } from './podcasts.service';

@Controller('podcasts')
export class PodcastsController {
  constructor(private readonly podcastsService: PodcastsService) {}
  @Get()
  getAll(): Podcast[] {
    return this.podcastsService.getAll();
  }

  @Get('/:id/episodes') //,'episodes'
  getOne(@Param('id') episodeId: string): Podcast {
    return this.podcastsService.getOne(episodeId);
  }

  @Post(':id')
  create(@Body() posdcastsData) {
    return this.podcastsService.create(posdcastsData);
  }

  @Patch(':id')
  patch(@Param('id') episodeId: string, @Body() updateData) {
    return this.podcastsService.update(episodeId, updateData);
  }
  @Delete('/:id')
  remove(@Param('id') episodeId: string) {
    return this.podcastsService.deleteOne(episodeId);
  }
}

import { Podcast } from './entities/podcast.entity';
import { PodcastsService } from './podcasts.service';
export declare class PodcastsController {
    private readonly podcastsService;
    constructor(podcastsService: PodcastsService);
    getAll(): Podcast[];
    getOne(episodeId: string): Podcast;
    create(posdcastsData: any): void;
    patch(episodeId: string, updateData: any): void;
    remove(episodeId: string): boolean;
}

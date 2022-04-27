import { Podcast } from './entities/podcast.entity';
export declare class PodcastsService {
    private podcasts;
    getAll(): Podcast[];
    getOne(id: string): Podcast;
    deleteOne(id: string): boolean;
    create(posdcastsData: any): void;
    update(id: string, updateData: any): void;
}

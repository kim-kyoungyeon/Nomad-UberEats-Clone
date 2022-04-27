import { Episode } from './episode.entity';
export declare class Podcast {
    id: number;
    title: string;
    category: string;
    rating: number;
    episodes: Episode[];
}

import {PhotoInterface} from './photo.interface';

export interface CurrentDatePhotosInterface {
    id: number;
    date: string;
    images: PhotoInterface[];
}

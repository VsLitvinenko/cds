import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {CurrentDatePhotosInterface} from '../interfaces/current-date-photos.interface';
import {RespectInterface} from '../interfaces/respect.interface';
import {ApiService} from '../../../../../../common/services/api.service';
import {ApiResponse} from '../../../../../../common/interfaces/api-response.interface';
import {PopoverService} from '../../../../../../common/services/popover.service';
import {PhotoService} from './photo.service';

@Injectable()

export class RespectService {
    // tslint:disable:variable-name
    private _curDates$$: BehaviorSubject<CurrentDatePhotosInterface[]> = new BehaviorSubject(null);
    public curDates$: Observable<CurrentDatePhotosInterface[]> = this._curDates$$ as Observable<CurrentDatePhotosInterface[]>;

    private _respects$$: BehaviorSubject<RespectInterface[]> = new BehaviorSubject(null);
    public respects$: Observable<RespectInterface[]> = this._respects$$ as Observable<RespectInterface[]>;

    private _deleteImage$$: BehaviorSubject<string> = new BehaviorSubject(null);
    public deleteImage$: Observable<string> = this._deleteImage$$ as Observable<string>;

    constructor(private _api: ApiService,
                private _popover: PopoverService,
                private _photo: PhotoService) { }

    public getRespects(dateString: string): void {
        this._api.get(`getRespects?${dateString}`).then((answer: ApiResponse<any>) => {
            if (answer) {
                if (answer.success) {
                    this._popover.hidePreloader({ success: true }).then();
                    this._respects$$.next(answer.data);
                }
                else {
                    this._popover.hidePreloader({
                        success: false,
                        message: answer.reason,
                    }).then();
                }
            }
        });
    }

    public getCurrentDates(id: number): void {
        this._api.get(`getImages?id=${id}`).then((answer: ApiResponse<any>) => {
            if (answer) {
                if (answer.success) {
                    this._popover.hidePreloader({ success: true }).then();
                    this._curDates$$.next(answer.data);
                }
                else {
                    this._popover.hidePreloader({
                        success: false,
                        message: answer.reason,
                    }).then();
                }
            }
        });
    }

    public addLocalPhotos(data: { id: number, data: string[] }): void {
        this._api.post('saveImages', data).then((answer: ApiResponse<any>) => {
            if (answer) {
                if (answer.success) {
                    this._popover.hidePreloader({
                        success: true,
                        message: 'Фотографии загружены',
                    }).then();
                    this.getCurrentDates(data.id);
                    this._photo.clearLocalPhotos();
                }
                else {
                    this._popover.hidePreloader({
                        success: false,
                        message: answer.reason,
                    }).then();
                }
            }
        });
    }

    public deleteRespectImage(id: string, respectId: number): void {
        this._api.delete(`deleteImage?id=${id}&resId=${respectId}`).then((answer: ApiResponse<any>) => {
            if (answer) {
                if (answer.success) {
                    this._popover.hidePreloader({
                        success: true,
                        message: 'Изображение удалено',
                    }).then();
                    this._popover.hideModal().then();
                    this._deleteImage$$.next(id);
                } else {
                    this._popover.hidePreloader({
                        success: false,
                        message: answer.reason,
                    }).then();
                }
            }
        });
    }
}

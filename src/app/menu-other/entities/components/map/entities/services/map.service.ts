import {Injectable} from '@angular/core';
import {ApiService} from '../../../../../../common/services/api.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {MapInterface} from '../interfaces/map.interface';
import {PopoverService} from '../../../../../../common/services/popover.service';
import {ApiResponse} from '../../../../../../common/interfaces/api-response.interface';

@Injectable()

export class MapService {
    // tslint:disable:variable-name

    private _mapList$$: BehaviorSubject<MapInterface[]> = new BehaviorSubject(null);
    public mapList$: Observable<MapInterface[]> = this._mapList$$ as Observable<MapInterface[]>;

    constructor(private _api: ApiService, private _popover: PopoverService) {
    }

    public getMapList(): void {
        this._api.get(`getMaps`).then((answer: ApiResponse<any>) => {
            if (answer) {
                if (answer.success) {
                    this._popover.hidePreloader({ success: true }).then();
                    this._mapList$$.next(answer.data);
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

    public clearMapList(): void {
        this._mapList$$.next(null);
    }

    public async isUserHasInternetConnection() {
        return this._api.get('isInternetConnection', false);
    }
}

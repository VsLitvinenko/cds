import {Injectable} from '@angular/core';
import {ApiService} from '../../../common/services/api.service';
import {PopoverService} from '../../../common/services/popover.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {StudioItemInterface} from '../interfaces/studio-item.interface';
import {ApiResponse} from '../../../common/interfaces/api-response.interface';

@Injectable()
export class StudiosInfoService {
    // tslint:disable:variable-name
    private _studioItems$$: BehaviorSubject<StudioItemInterface[]> = new BehaviorSubject(null);
    public studioItems$: Observable<StudioItemInterface[]> = this._studioItems$$ as Observable<StudioItemInterface[]>;

    constructor(private _api: ApiService, private _popover: PopoverService) {
    }

    public getStudioItems(): void {
        this._api.get('getStudios').then( (answer: ApiResponse<any>) => {
            if (answer) {
                if (answer.success) {
                    this._popover.hidePreloader({
                        success: true,
                    }).then();
                    this._studioItems$$.next(answer.data);
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
}

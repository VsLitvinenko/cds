import {Injectable} from '@angular/core';
import {ApiService} from '../../../common/services/api.service';
import {PopoverService} from '../../../common/services/popover.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {StudioItemInterface} from '../interfaces/studio-item.interface';
import {ApiResponse} from '../../../common/interfaces/api-response.interface';
import {TabService} from '../../../tabs/entities/services/tab.service';

@Injectable()
export class StudiosInfoService {
    // tslint:disable:variable-name
    private _studioItems$$: BehaviorSubject<StudioItemInterface[]> = new BehaviorSubject(null);
    public studioItems$: Observable<StudioItemInterface[]> = this._studioItems$$ as Observable<StudioItemInterface[]>;

    constructor(private _api: ApiService,
                private _popover: PopoverService,
                private _tabs: TabService) {
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

    public sendStudioEntryForm(entryForm: any): void {
        this._api.post( 'entryStudioForm', entryForm).then( (answer: ApiResponse<any>) => {
            if (answer) {
                if (answer.success) {
                    this._popover.hidePreloader({
                        success: true,
                        message: 'Вы отправили заявку',
                    }).then();
                    this._tabs.changeCurrentTab('back');
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

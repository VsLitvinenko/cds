import {Injectable} from '@angular/core';
import {ApiService} from '../../../common/services/api.service';
import {PopoverService} from '../../../common/services/popover.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {StudioItemInterface} from '../interfaces/studio-item.interface';
import {ApiResponse} from '../../../common/interfaces/api-response.interface';
import {TabService} from '../../../tabs/entities/services/tab.service';
import {FullStudioInfoInterface} from '../interfaces/full-studio-info.interface';

@Injectable()
export class StudiosInfoService {
    // tslint:disable:variable-name
    private _studioItems$$: BehaviorSubject<StudioItemInterface[][]> = new BehaviorSubject(null);
    public studioItems$: Observable<StudioItemInterface[][]> = this._studioItems$$ as Observable<StudioItemInterface[][]>;

    private _fullInfo$$: BehaviorSubject<FullStudioInfoInterface> = new BehaviorSubject(null);
    public fullInfo$: Observable<FullStudioInfoInterface> = this._fullInfo$$ as Observable<FullStudioInfoInterface>;

    private _selectOptions$$: BehaviorSubject<string[]> = new BehaviorSubject(null);
    public selectOptions$: Observable<string[]> = this._selectOptions$$ as Observable<string[]>;

    constructor(private _api: ApiService,
                private _popover: PopoverService,
                private _tabs: TabService) {
        this._getStudioSelectOptions();
    }

    public getStudioItems(): void {
        this._api.get('getStudios').then( (answer: ApiResponse<any>) => {
            if (!answer) {
                return;
            }
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
        });
    }

    public getFullStudioInfo(id: number): void {
        this._api.get(`mainStudioInfo?id=${id}`).then( (answer: ApiResponse<any>) => {
            if (!answer) {
                return;
            }
            if (answer.success) {
                this._popover.hidePreloader({
                    success: true,
                }).then();
                this._fullInfo$$.next(answer.data);
            }
            else {
                this._popover.hidePreloader({
                    success: false,
                    message: answer.reason,
                }).then();
            }
        });
    }

    private _getStudioSelectOptions(): void {
        this._api.get('getSortedStudios', false).then( (answer: ApiResponse<any>) => {
            if (!answer) {
                return;
            }
            if (answer.success) {
                this._selectOptions$$.next(answer.data);
            }
        });
    }

    public sendStudioEntryForm(entryForm: any): void {
        this._api.post( 'entryStudioForm', entryForm).then( (answer: ApiResponse<any>) => {
            if (!answer) {
                return;
            }
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
        });
    }
}

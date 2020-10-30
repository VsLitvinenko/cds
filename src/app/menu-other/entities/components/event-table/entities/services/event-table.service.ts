import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {EventObjectInterface} from '../interfaces/event-object.interface';
import {ApiService} from '../../../../../../common/api/api.service';
import {ApiResponse} from '../../../../../../common/api/api-responce.interface';
import {IEventInterface} from '../interfaces/ievent.interface';
import {EventObjectAnswerInterface} from '../interfaces/event-object-answer.interface';
import {PopoverService} from '../../../../../../common/api/popover.service';
import {TabService} from '../../../../../../tabs/entities/services/tab.service';

@Injectable()
export class EventTableService {
    // tslint:disable:variable-name
    private _iEvents$$: BehaviorSubject<IEventInterface[]> = new BehaviorSubject(null);
    public iEvents$: Observable<IEventInterface[]> = this._iEvents$$ as Observable<IEventInterface[]>;

    private _eventObjects$$: BehaviorSubject<EventObjectAnswerInterface[]> = new BehaviorSubject(null);
    public eventObjects$: Observable<EventObjectAnswerInterface[]> = this._eventObjects$$ as Observable<EventObjectAnswerInterface[]>;

    constructor(private _api: ApiService,
                private _tab: TabService,
                private _popover: PopoverService) {
    }
    public getIEvents(): void {
        this._api.get('LoadIEvents').then( (answer: ApiResponse<any>) => {
            if (answer) {
                if (answer.success) {
                    this._popover.hidePreloader(true).then();
                    this._iEvents$$.next(answer.data);
                }
                else {
                    this._popover.hidePreloader(false).then();
                }
            }
        });
    }

    public getEventObjects(date: string): void {
        this._api.get(`LoadEventObjects?date=${date}`).then( (answer: ApiResponse<any>) => {
            if (answer) {
                if (answer.success) {
                    this._popover.hidePreloader(true).then();
                    this._eventObjects$$.next(answer.data);
                }
                else {
                    this._popover.hidePreloader(false).then();
                }
            }
        });
    }

    public addEventObject(item: EventObjectInterface) {
        this._api.post( 'AddNewEventObjects', item).then( (answer: ApiResponse<any>) => {
            if (answer) {
                if (answer.success) {
                    this._popover.hidePreloader(true).then();
                    this.getIEvents();
                    this._tab.changeCurrentTab('back');
                }
                else {
                    this._popover.hidePreloader(false).then();
                }
            }
        });
    }

    public updateEventObject(item: EventObjectInterface) {
        this._api.put('UpdateEventObject', item).then( (answer: ApiResponse<any>) => {
            if (answer) {
                if (answer.success) {
                    this._popover.hidePreloader(true).then();
                    this.getEventObjects(item.date);
                    this.getIEvents();
                    this._tab.changeCurrentTab('back');
                }
                else {
                    this._popover.hidePreloader(false).then();
                }
            }
        });
    }

    public deleteEventObject(id: number) {
        this._api.delete(`DeleteEventObjects?id=${id}`).then( (answer: ApiResponse<any>) => {
            if (answer) {
                if (answer.success) {
                    this._popover.hidePreloader(true).then();
                }
                else {
                    this._popover.hidePreloader(false).then();
                }
            }
        });
    }
}

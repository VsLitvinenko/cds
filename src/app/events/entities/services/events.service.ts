import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {EventObjectInterface} from '../interfaces/event-object.interface';
import {ApiService} from '../../../common/services/api.service';
import {ApiResponse} from '../../../common/interfaces/api-response.interface';
import {IEventInterface} from '../interfaces/ievent.interface';
import {EventObjectAnswerInterface} from '../interfaces/event-object-answer.interface';
import {PopoverService} from '../../../common/services/popover.service';
import {TabService} from '../../../tabs/entities/services/tab.service';

@Injectable()
export class EventsService {
    // tslint:disable:variable-name
    private _iEvents$$: BehaviorSubject<IEventInterface[]> = new BehaviorSubject(null);
    public iEvents$: Observable<IEventInterface[]> = this._iEvents$$ as Observable<IEventInterface[]>;

    private _eventObjects$$: BehaviorSubject<EventObjectAnswerInterface[]> = new BehaviorSubject(null);
    public eventObjects$: Observable<EventObjectAnswerInterface[]> = this._eventObjects$$ as Observable<EventObjectAnswerInterface[]>;

    constructor(private _api: ApiService,
                private _tab: TabService,
                private _popover: PopoverService) { }

    public getIEvents(): void {
        this._api.get('LoadIEvents').then( (answer: ApiResponse<any>) => {
            if (answer) {
                if (answer.success) {
                    this._popover.hidePreloader({
                        success: true,
                    }).then();
                    this._iEvents$$.next(answer.data);
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

    public getEventObjects(date: string): void {
        this._api.get(`LoadEventObjects?date=${date}`).then( (answer: ApiResponse<any>) => {
            if (answer) {
                if (answer.success) {
                    this._popover.hidePreloader({
                        success: true,
                    }).then();
                    this._eventObjects$$.next(answer.data);
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

    public addEventObject(item: EventObjectInterface) {
        this._api.post( 'AddNewEventObjects', item).then( (answer: ApiResponse<any>) => {
            if (answer) {
                if (answer.success) {
                    this._popover.hidePreloader({
                        success: true,
                        message: 'Мероприятие добавлено',
                    }).then();
                    this.getIEvents();
                    this._tab.changeCurrentTab();
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

    public updateEventObject(item: EventObjectInterface) {
        this._api.put('UpdateEventObject', item).then( (answer: ApiResponse<any>) => {
            if (answer) {
                if (answer.success) {
                    this._popover.hidePreloader({
                        success: true,
                        message: 'Мероприятие обновлено',
                    }).then();
                    this.getEventObjects(item.date);
                    this.getIEvents();
                    this._tab.changeCurrentTab('back');
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

    public deleteEventObject(id: number) {
        this._api.delete(`DeleteEventObjects?id=${id}`).then( (answer: ApiResponse<any>) => {
            if (answer) {
                if (answer.success) {
                    this._popover.hidePreloader({
                        success: true,
                        message: 'Мероприятие удалено',
                    }).then();
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

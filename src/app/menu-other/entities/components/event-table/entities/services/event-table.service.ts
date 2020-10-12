import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {IEvent} from 'ionic2-calendar/calendar';
import {EventObjectInterface} from '../interfaces/event-object.interface';
import {ApiService} from '../../../../../../common/api/api.service';
import {ApiResponse} from '../../../../../../common/api/api-responce.interface';

@Injectable()
export class EventTableService {
    // tslint:disable:variable-name
    private _iEvents$$: BehaviorSubject<IEvent[]> = new BehaviorSubject(null);
    public iEvents$: Observable<IEvent[]> = this._iEvents$$ as Observable<IEvent[]>;

    private _eventObjects$$: BehaviorSubject<EventObjectInterface[]> = new BehaviorSubject(null);
    public eventObjects$: Observable<EventObjectInterface[]> = this._eventObjects$$ as Observable<EventObjectInterface[]>;

    constructor(private _api: ApiService) {
    }
    public getIEvents(): void {
        this._api.get('LoadIEvents').then( (answer: ApiResponse<any>) => {
            if (!answer.success) {
                return;
            }
            this._iEvents$$.next(answer.data);
        });
    }

    public getEventObjects(date: Date): void {
        this._api.get(`LoadEventObjects?date=${Da}`).then( (answer: ApiResponse<any>) => {
            if (!answer.success) {
                return;
            }
            this._eventObjects$$.next(answer.data);
        });
    }

    public addEventObject(item: EventObjectInterface) {
        this._api.post( 'AddNewEventObjects', item).then( (answer: ApiResponse<any>) => {
            if (!answer.success) {
                return;
            }
            console.log(answer);
        });
    }
}

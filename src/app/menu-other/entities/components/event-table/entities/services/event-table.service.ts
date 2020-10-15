import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {EventObjectInterface} from '../interfaces/event-object.interface';
import {ApiService} from '../../../../../../common/api/api.service';
import {ApiResponse} from '../../../../../../common/api/api-responce.interface';
import {IEventInterface} from '../interfaces/ievent.interface';
import {EventObjectAnswerInterface} from '../interfaces/event-object-answer.interface';

@Injectable()
export class EventTableService {
    // tslint:disable:variable-name
    private _iEvents$$: BehaviorSubject<IEventInterface[]> = new BehaviorSubject(null);
    public iEvents$: Observable<IEventInterface[]> = this._iEvents$$ as Observable<IEventInterface[]>;

    private _eventObjects$$: BehaviorSubject<EventObjectAnswerInterface[]> = new BehaviorSubject(null);
    public eventObjects$: Observable<EventObjectAnswerInterface[]> = this._eventObjects$$ as Observable<EventObjectAnswerInterface[]>;

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

    public getEventObjects(date: string): void {
        this._api.get(`LoadEventObjects?date=${date}`).then( (answer: ApiResponse<any>) => {
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

    public updateEventObject(item: EventObjectInterface) {
        this._api.put('UpdateEventObject', item).then( (answer: ApiResponse<any>) => {
            if (!answer.success) {
                return;
            }
            console.log(answer);
        });
    }

    public deleteEventObject(id: number) {
        this._api.delete(`DeleteEventObjects?id=${id}`).then( (answer: ApiResponse<any>) => {
            if (!answer.success) {
                return;
            }
            console.log(answer);
        });
    }
}

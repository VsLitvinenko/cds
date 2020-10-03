import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {IEvent} from 'ionic2-calendar/calendar';
import {EventObjectInterface} from '../interfaces/event-object.interface';

@Injectable()
export class EventTableService {
    // tslint:disable:variable-name
    private _iEvents$$: BehaviorSubject<IEvent[]> = new BehaviorSubject(null);
    public iEvents$: Observable<IEvent[]> = this._iEvents$$ as Observable<IEvent[]>;

    private _eventObjects$$: BehaviorSubject<EventObjectInterface[]> = new BehaviorSubject(null);
    public eventObjects$: Observable<EventObjectInterface[]> = this._eventObjects$$ as Observable<EventObjectInterface[]>;

    constructor() {
    }
    public getIEvents(): void {
        const events = [
            {
                title: 'Мероприятие 1',
                startTime: new Date(2020, 9, 4),
                endTime: new Date(2020, 9, 4, 10, 25),
                allDay: false
            },
            {
                title: 'Мероприятие 2',
                startTime: new Date(2020, 9, 4, 12, 30),
                endTime: new Date(2020, 9, 4, 18, 55),
                allDay: false
            },
            {
                title: 'Мероприятие 3',
                startTime: new Date(2020, 9, 8),
                endTime: new Date(2020, 9, 8, 10, 25),
                allDay: false
            },
        ];
        console.log(events);
        this._iEvents$$.next(events);
    }
}

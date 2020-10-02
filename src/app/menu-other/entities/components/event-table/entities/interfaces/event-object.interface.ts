import {IEvent} from 'ionic2-calendar/calendar';

export interface EventObjectInterface {
    id: number;
    currentIEvent: IEvent;
    location: string;
    organizer: string;
    phone: string;
    notes: string;
}

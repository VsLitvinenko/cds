import { Component, OnInit } from '@angular/core';
import {EventTableService} from '../../services/event-table.service';
import {EventObjectInterface} from '../../interfaces/event-object.interface';

@Component({
  selector: 'app-current-date-event',
  templateUrl: './current-date-event.component.html',
  styleUrls: ['./current-date-event.component.scss'],
})
export class CurrentDateEventComponent implements OnInit {
  public currentDate: Date;
  public subTitle: string;
  public eventObjects: EventObjectInterface[];

  // tslint:disable-next-line:variable-name
  constructor(private _eventTableService: EventTableService) { }

  ngOnInit() {
    const day = this.currentDate.getDate();
    const month = this.currentDate.getMonth();
    const year = this.currentDate.getFullYear();
    this.subTitle = `Мероприятия ${day > 9 ? day : `0${day}`}.${month > 8 ? month + 1 : `0${month + 1}`}.${year}`;

    this._eventTableService.eventObjects$.subscribe( (items: EventObjectInterface[]) => {
      this.eventObjects = items;
    });
    this._eventTableService.getEventObjects(new Date());
  }

  public getStartTimeFromEventObject(e: EventObjectInterface): string {
    const hours = e.currentIEvent.startTime.getHours();
    const minutes = e.currentIEvent.startTime.getMinutes();
    return `${hours > 9 ? hours : `0${hours}`}:${minutes > 9 ? minutes : `0${minutes}`}`;
  }

  public getEndTimeFromEventObject(e: EventObjectInterface): string {
    return `${e.currentIEvent.endTime.getHours()}:${e.currentIEvent.endTime.getMinutes()}`;
  }

}

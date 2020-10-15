import { Component, OnInit } from '@angular/core';
import {EventTableService} from '../../services/event-table.service';
import {AddEventComponent} from '../add-event/add-event.component';
import {EventObjectAnswerInterface} from '../../interfaces/event-object-answer.interface';

@Component({
  selector: 'app-current-date-event',
  templateUrl: './current-date-event.component.html',
  styleUrls: ['./current-date-event.component.scss'],
})
export class CurrentDateEventComponent implements OnInit {
  public currentDate: Date;
  public subTitle: string;
  public eventObjects: EventObjectAnswerInterface[];
  public addEventPage = AddEventComponent;

  // tslint:disable-next-line:variable-name
  constructor(private _eventTableService: EventTableService) {
  }

  ngOnInit() {
    const day = this.currentDate.getDate();
    const month = this.currentDate.getMonth() + 1;
    const year = this.currentDate.getFullYear();
    this.subTitle = `Мероприятия ${day > 9 ? day : `0${day}`}.${month > 9 ? month : `0${month + 1}`}.${year}`;

    this._eventTableService.eventObjects$.subscribe( (items: EventObjectAnswerInterface[]) => {
      this.eventObjects = items;
    });
    this._eventTableService.getEventObjects(`${year}-${month}-${day}`);
  }

  public getTimeFromEventObject(e: EventObjectAnswerInterface, isItStartTime: boolean): string {
    let hours: number;
    let minutes: number;
    if (isItStartTime) {
      hours = e.startTime.hours;
      minutes = e.startTime.minutes;
    }
    else {
      hours = e.endTime.hours;
      minutes = e.endTime.minutes;
    }
    return `${hours > 9 ? hours : `0${hours}`}:${minutes > 9 ? minutes : `0${minutes}`}`;
  }
  
  public deleteEventObject(id: number): void {
    this._eventTableService.deleteEventObject(id);
  }
}

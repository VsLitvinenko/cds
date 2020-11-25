import { Component, OnInit } from '@angular/core';
import {AddEventComponent} from '../add-event/add-event.component';
import { EventObjectAnswerInterface } from '../../interfaces/event-object-answer.interface';
import { EventsService } from '../../services/events.service';
import {SharedService} from '../../../../common/services/shared.service';

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
  private dateString: string;

  // tslint:disable-next-line:variable-name
  constructor(private _eventTableService: EventsService, public shared: SharedService) {
  }

  ngOnInit() {
    const day = this.currentDate.getDate();
    const month = this.currentDate.getMonth() + 1;
    const year = this.currentDate.getFullYear();
    this.subTitle = `Мероприятия ${day > 9 ? day : `0${day}`}.${month > 9 ? month : `0${month + 1}`}.${year}`;

    this._eventTableService.eventObjects$.subscribe( (items: EventObjectAnswerInterface[]) => {
      this.eventObjects = items;
    });
    this.dateString = `${year}-${month}-${day}`;
    this._eventTableService.getEventObjects(this.dateString);
  }

  public getTimeFromEventObject(e: EventObjectAnswerInterface): string {
    const sHours = e.startTime.hours;
    const sMinutes = e.startTime.minutes;
    const eHours = e.endTime.hours;
    const eMinutes = e.endTime.minutes;
    return `${sHours > 9 ? sHours : `0${sHours}`}:${sMinutes > 9 ? sMinutes : `0${sMinutes}`} - ` +
           `${eHours > 9 ? eHours : `0${eHours}`}:${eMinutes > 9 ? eMinutes : `0${eMinutes}`}`;
  }

  public async deleteEventObject(item: EventObjectAnswerInterface) {
    await this.shared.userConfirm(
        `Вы действительно хотите удалить мероприятие ${item.title}?`,
        () => {
          this._eventTableService.deleteEventObject(item.id, this.dateString);
        },
        'Удаление');
  }
  public updateEventObjectsList(event): void {
    this._eventTableService.getEventObjects(this.dateString);
    event.target.complete();
  }

  public copyEventToClipboard(item: EventObjectAnswerInterface): void {
    this.shared.copyToClipboard(`${item.title} пройдет ${this.getTimeFromEventObject(item)}, ` +
    `место проведения - ${item.location}.\nОрганизатор - ${item.organizer} (тел. ${item.phone}).\n` +
    `Комментарий: ${item.notes}`);
  }
}

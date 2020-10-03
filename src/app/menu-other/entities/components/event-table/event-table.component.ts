import {Component, OnInit, ViewChild} from '@angular/core';
import {CalendarComponent} from 'ionic2-calendar';
import {IEvent} from 'ionic2-calendar/calendar';
import {AddEventComponent} from './entities/components/add-event/add-event.component';
import {CurrentDateEventComponent} from './entities/components/current-date-event/current-date-event.component';

@Component({
  selector: 'app-event-table',
  templateUrl: './event-table.component.html',
  styleUrls: ['./event-table.component.scss'],
})
export class EventTableComponent implements OnInit {
  public currentEvents: IEvent[] = [];
  public calendarTitle: string;
  public currentDate = new Date();

  public addEventPage = AddEventComponent;
  public currentDateEventPage = CurrentDateEventComponent;

  @ViewChild(CalendarComponent) calendar: CalendarComponent;

  constructor() { }

  ngOnInit() {}

  public onViewTittleChanged(title): void {
    const months = [
      { en: 'January', ru: 'Январь' },
      { en: 'February', ru: 'Февраль'},
      { en: 'March', ru: 'Март'},
      { en: 'April', ru: 'Апрель'},
      { en: 'May', ru: 'Май'},
      { en: 'June', ru: 'Июнь'},
      { en: 'July', ru: 'Июль'},
      { en: 'August', ru: 'Август'},
      { en: 'September', ru: 'Сентябрь'},
      { en: 'October', ru: 'Октябрь' },
      { en: 'November', ru: 'Ноябрь' },
      { en: 'December', ru: 'Декабрь' },
    ];
    const currentMonth = months.find(item => title.includes(item.en));
    this.calendarTitle = title.replace(currentMonth.en, currentMonth.ru);
  }
  public nextMonth(): void {
    this.calendar.slideNext();
  }
  public prevMonth(): void {
    this.calendar.slidePrev();
  }

  public createEvent(): void {
    const startTime = new Date();
    const endTime = new Date();

    this.currentEvents.push({
      title: 'Мероприятие такое-то',
      startTime,
      endTime,
      allDay: false
    });
  }

  public changeCurrentDate(): void {
    if (this.calendar) {
      this.currentDate = this.calendar.currentDate;
    }
  }

}

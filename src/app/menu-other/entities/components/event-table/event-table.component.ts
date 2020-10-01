import {Component, OnInit, ViewChild} from '@angular/core';
import {CalendarComponent} from 'ionic2-calendar';
import {IEvent} from 'ionic2-calendar/calendar';

@Component({
  selector: 'app-event-table',
  templateUrl: './event-table.component.html',
  styleUrls: ['./event-table.component.scss'],
})
export class EventTableComponent implements OnInit {
  public currentEvents: IEvent[] = [];
  public calendarTittle: string;
  public currentDate = new Date();

  @ViewChild(CalendarComponent) calendar: CalendarComponent;

  constructor() { }

  ngOnInit() {}

  public onViewTittleChanged(tittle): void {
    this.calendarTittle = tittle;
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

}

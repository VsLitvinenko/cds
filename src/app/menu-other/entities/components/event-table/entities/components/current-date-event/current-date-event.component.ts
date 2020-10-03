import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-date-event',
  templateUrl: './current-date-event.component.html',
  styleUrls: ['./current-date-event.component.scss'],
})
export class CurrentDateEventComponent implements OnInit {
  public currentDate: Date;
  public subTitle: string;

  constructor() { }

  ngOnInit() {
    this.subTitle = `Мероприятия ${this.currentDate.getDate()}.${this.currentDate.getMonth() + 1}.${this.currentDate.getFullYear()}`;
  }

}

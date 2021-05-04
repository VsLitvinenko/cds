import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { DynamicLabelInterface } from 'src/app/common/interfaces/dynamic-label.interface';
import { EventObjectAnswerInterface } from '../../interfaces/event-object-answer.interface';
import { EventObjectInterface } from '../../interfaces/event-object.interface';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss'],
})
export class AddEventComponent implements OnInit {
  public subTitle = '';
  public dynamicLabels: DynamicLabelInterface[];
  public currentFormGroup: FormGroup = new FormGroup({
    eventDate: new FormControl(null, Validators.required),
    eventName: new FormControl(null, Validators.required),
    eventLocation: new FormControl(null, Validators.required),
    eventOrg: new FormControl(null, Validators.required),
    eventPhone: new FormControl(null, Validators.required),
    eventStart: new FormControl(null, Validators.required),
    eventEnd: new FormControl(null, Validators.required),
    eventNotes: new FormControl(),
  });
  public monthShortNames = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
  public dayShortNames = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

  public editEventObject: EventObjectAnswerInterface;
  public currentDate: Date;
  // tslint:disable:variable-name

  constructor(private _eventService: EventsService) { }

  ngOnInit() {
    if (this.editEventObject) {
      this.subTitle = 'Обновить';
      const eventDate = new Date(this.editEventObject.date.year,
          this.editEventObject.date.month - 1,
          this.editEventObject.date.day).toISOString();
      const eventStart = new Date(0, 0, 0,
          this.editEventObject.startTime.hours,
          this.editEventObject.startTime.minutes).toISOString();
      const eventEnd = new Date(0, 0, 0,
          this.editEventObject.endTime.hours,
          this.editEventObject.endTime.minutes).toISOString();
      this.currentFormGroup.setValue({
        eventDate,
        eventName: this.editEventObject.title,
        eventLocation: this.editEventObject.location,
        eventOrg: this.editEventObject.organizer,
        eventPhone: this.editEventObject.phone,
        eventStart,
        eventEnd,
        eventNotes: this.editEventObject.notes,
      });
    }
    else {
      this.subTitle = 'Добавить';
      this.currentFormGroup.setValue({
        eventDate: this.currentDate.toISOString(),
        eventName: null,
        eventLocation: null,
        eventOrg: null,
        eventPhone: null,
        eventStart: null,
        eventEnd: null,
        eventNotes: null,
      });
    }
    this.dynamicLabels = [
      {
        title: 'Название:',
        type: 'text',
        formControlName: 'eventName',
      },
      {
        title: 'Место проведения:',
        type: 'text',
        formControlName: 'eventLocation',
      },
      {
        title: 'Организатор:',
        type: 'text',
        formControlName: 'eventOrg',
      },
      {
        title: 'Телефон организатора:',
        type: 'tel',
        formControlName: 'eventPhone',
      },
    ];
  }

  public submit(): void {
    if (this.editEventObject) {
      this._eventService.updateEventObject(this._createEventObject(this.editEventObject.id));
    }
    else {
      this._eventService.addEventObject(this._createEventObject());
    }
  }

  private _createEventObject(id = null): EventObjectInterface {
    const e = this.currentFormGroup.value;
    const currentDate = new Date(e.eventDate);
    const currentStartTime = new Date(e.eventStart);
    const currentEndTime = new Date(e.eventEnd);
    return {
      id,
      location: e.eventLocation,
      organizer: e.eventOrg,
      phone: e.eventPhone,
      notes: e.eventNotes,
      date: `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`,
      startTime: `${currentStartTime.getHours()}:${currentStartTime.getMinutes()}`,
      endTime: `${currentEndTime.getHours()}:${currentEndTime.getMinutes()}`,
      title: e.eventName,
    };
  }
}

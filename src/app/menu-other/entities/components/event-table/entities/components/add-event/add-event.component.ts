import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DynamicLabelInterface} from '../../../../../../../studios-entry-form/entities/interfaces/dynamic-label.interface';
import {EventObjectInterface} from '../../interfaces/event-object.interface';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss'],
})
export class AddEventComponent implements OnInit {
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
  public monthShortNames = ['янв', 'фев', 'мав', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
  public dayShortNames = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

  constructor() { }

  ngOnInit() {
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
    console.log(this._createEventObject());
  }

  private _createEventObject(): EventObjectInterface {
    const e = this.currentFormGroup.value;
    const startTime = new Date(e.eventDate);
    const endTime = new Date(e.eventDate);
    startTime.setHours(new Date(e.eventStart).getHours(), new Date(e.eventStart).getMinutes());
    endTime.setHours(new Date(e.eventEnd).getHours(), new Date(e.eventEnd).getMinutes());
    return {
      id: null,
      currentIEvent: {
        title: e.eventName,
        startTime,
        endTime,
        allDay: false,
      },
      location: e.eventLocation,
      organizer: e.eventOrg,
      phone: e.eventPhone,
      notes: e.eventNotes,
    };
  }

}

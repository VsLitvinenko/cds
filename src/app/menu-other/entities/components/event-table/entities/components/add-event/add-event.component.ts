import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DynamicLabelInterface} from '../../../../../../../studios-entry-form/entities/interfaces/dynamic-label.interface';

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
    eventPhone: new FormControl(null, Validators.pattern('[0-9]{10}')),
    eventStart: new FormControl(null, Validators.required),
    eventEnd: new FormControl(null, Validators.required),
    eventComments: new FormControl(),
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
        icon: 'call',
        type: 'tel',
        formControlName: 'eventPhone',
      },
    ];
  }

  public submit(): void {
    console.log(this.currentFormGroup.value);
}

}

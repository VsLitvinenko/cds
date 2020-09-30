import {Component, OnDestroy, OnInit} from '@angular/core';
import {DynamicLabelInterface} from './entities/interfaces/dynamic-label.interface';

@Component({
  selector: 'app-studios-entry-form',
  templateUrl: 'studios-entry-form.page.html',
  styleUrls: ['studios-entry-form.page.scss']
})
export class StudiosEntryFormPage implements OnInit, OnDestroy  {
  public dynamicLabels: DynamicLabelInterface[];
  public studioSelectOptions: string[];

  constructor() {}

  ngOnInit() {
    this.dynamicLabels = [
      {
        tittle: 'Фамилия:',
        icon: 'dfdf',
        type: 'text'
      },
      {
        tittle: 'Имя:',
        icon: 'dfdf',
        type: 'text'
      },
      {
        tittle: 'Отчество:',
        icon: 'dfdf',
        type: 'text'
      },
      {
        tittle: 'Телефон:',
        icon: 'dfdf',
        type: 'tel'
      },
    ];
    this.studioSelectOptions = [
        'та студия',
        'эта студия',
        'самая лучшая студия',
        'самая худшая студия',
        'вижуал студия',
    ];
  }
  ngOnDestroy() {
    alert();
  }
}

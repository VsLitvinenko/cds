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
        type: 'text'
      },
      {
        tittle: 'Имя:',
        type: 'text'
      },
      {
        tittle: 'Отчество:',
        type: 'text'
      },
      {
        tittle: 'Телефон:',
        icon: 'call',
        type: 'tel'
      },
      {
        tittle: 'Ссылка на страницу VK:',
        icon: 'logo-vk',
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

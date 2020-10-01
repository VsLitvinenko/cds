import {Component, OnInit} from '@angular/core';
import {DynamicLabelInterface} from './entities/interfaces/dynamic-label.interface';
import {FormGroup, FormControl, Validators, } from '@angular/forms';

@Component({
  selector: 'app-studios-entry-form',
  templateUrl: 'studios-entry-form.page.html',
  styleUrls: ['studios-entry-form.page.scss']
})
export class StudiosEntryFormPage implements OnInit {
  public dynamicLabels: DynamicLabelInterface[];
  public studioSelectOptions: string[];
  public currentFormGroup: FormGroup = new FormGroup({
    userStudio: new FormControl(null, Validators.required),
    userSurname: new FormControl(null, Validators.required),
    userName: new FormControl(null, Validators.required),
    userPatronymic: new FormControl(null, Validators.required),
    userPhone: new FormControl(null, Validators.pattern('[0-9]{10}')),
    userVk: new FormControl(),
});

  constructor() {}

  ngOnInit() {
    this.dynamicLabels = [
      {
        tittle: 'Фамилия:',
        type: 'text',
        formControlName: 'userSurname',
      },
      {
        tittle: 'Имя:',
        type: 'text',
        formControlName: 'userName',
      },
      {
        tittle: 'Отчество:',
        type: 'text',
        formControlName: 'userPatronymic',
      },
      {
        tittle: 'Телефон:',
        icon: 'call',
        type: 'tel',
        formControlName: 'userPhone',
      },
      {
        tittle: 'Ссылка на страницу VK:',
        icon: 'logo-vk',
        type: 'text',
        formControlName: 'userVk',
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

  public submit(): void {
    console.log(this.currentFormGroup.value);
  }
}

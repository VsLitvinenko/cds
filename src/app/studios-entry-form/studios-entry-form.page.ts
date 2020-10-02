import {Component, OnInit} from '@angular/core';
import {DynamicLabelInterface} from './entities/interfaces/dynamic-label.interface';
import {FormGroup, FormControl, Validators, } from '@angular/forms';
import {TabService} from '../tabs/entities/services/tab.service';

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
    userPhone: new FormControl(),
    userVk: new FormControl(),
});

  // tslint:disable-next-line:variable-name
  constructor(private _tabService: TabService) {}

  ngOnInit() {
    this._tabService.currentTab$.subscribe((newTab: string) => {
      this.currentFormGroup.reset();
    });
    this.dynamicLabels = [
      {
        title: 'Фамилия:',
        type: 'text',
        formControlName: 'userSurname',
      },
      {
        title: 'Имя:',
        type: 'text',
        formControlName: 'userName',
      },
      {
        title: 'Отчество:',
        type: 'text',
        formControlName: 'userPatronymic',
      },
      {
        title: 'Телефон:',
        icon: 'call',
        type: 'tel',
        formControlName: 'userPhone',
      },
      {
        title: 'Ссылка на страницу VK:',
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
    this.currentFormGroup.reset();
  }
}

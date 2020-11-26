import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, } from '@angular/forms';
import { TabService } from 'src/app/tabs/entities/services/tab.service';
import { DynamicLabelInterface } from '../../../../common/interfaces/dynamic-label.interface';

@Component({
  selector: 'app-studios-form',
  templateUrl: 'entry-form.component.html',
  styleUrls: ['entry-form.component.scss']
})
export class EntryFormComponent implements OnInit {
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
    this._tabService.currentTab$.subscribe((answer: string) => {
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

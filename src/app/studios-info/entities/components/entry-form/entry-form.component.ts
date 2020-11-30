import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { TabService } from 'src/app/tabs/entities/services/tab.service';
import { DynamicLabelInterface } from '../../../../common/interfaces/dynamic-label.interface';
import {StudiosInfoService} from "../../services/studios-info.service";

@Component({
  selector: 'app-studios-form',
  templateUrl: 'entry-form.component.html',
  styleUrls: ['entry-form.component.scss']
})
export class EntryFormComponent implements OnInit {
  public dynamicLabels: DynamicLabelInterface[];
  public studioSelectOptions: string[];
  public currentFormGroup: FormGroup = new FormGroup({
    studio: new FormControl(null, Validators.required),
    surname: new FormControl(null, Validators.required),
    name: new FormControl(null, Validators.required),
    patronymic: new FormControl(null, Validators.required),
    phone: new FormControl(),
    vk: new FormControl(),
  });

  // tslint:disable-next-line:variable-name
  constructor(private _studiosService: StudiosInfoService) {}

  ngOnInit() {
    this.dynamicLabels = [
      {
        title: 'Фамилия:',
        type: 'text',
        formControlName: 'surname',
      },
      {
        title: 'Имя:',
        type: 'text',
        formControlName: 'name',
      },
      {
        title: 'Отчество:',
        type: 'text',
        formControlName: 'patronymic',
      },
      {
        title: 'Телефон:',
        icon: 'call',
        type: 'tel',
        formControlName: 'phone',
      },
      {
        title: 'Ссылка на страницу VK:',
        icon: 'logo-vk',
        type: 'text',
        formControlName: 'vk',
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
    this._studiosService.sendStudioEntryForm(this.currentFormGroup.value);
  }
}

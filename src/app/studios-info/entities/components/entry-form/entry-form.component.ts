import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { DynamicLabelInterface } from '../../../../common/interfaces/dynamic-label.interface';
import { StudiosInfoService } from '../../services/studios-info.service';
import {CdsComponentClass} from '../../../../common/classes/cds-component-class';

@Component({
  selector: 'app-studios-form',
  templateUrl: 'entry-form.component.html',
  styleUrls: ['entry-form.component.scss']
})
export class EntryFormComponent extends CdsComponentClass implements OnInit {
  public currentStudioId: number;
  public defaultSelect = '';
  public dynamicLabels: DynamicLabelInterface[];
  public studioSelectOptions: string[];
  public currentFormGroup: FormGroup = new FormGroup({
    studio: new FormControl(null, Validators.required),
    surname: new FormControl(null, Validators.required),
    name: new FormControl(null, Validators.required),
    patronymic: new FormControl(null, Validators.required),
    phone: new FormControl(null, Validators.required),
    vk: new FormControl(null),
  });

  // tslint:disable-next-line:variable-name
  constructor(private _studiosService: StudiosInfoService) {
    super();
  }

  ngOnInit() {
    this._observeSafe(this._studiosService.selectOptions$).subscribe((data: string[]) => {
      this.studioSelectOptions = data;
      this.defaultSelect = this.studioSelectOptions[this.currentStudioId - 1];
      this.currentFormGroup.get('studio').setValue(this.defaultSelect);
    });
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
  }

  public submit(): void {
    this._studiosService.sendStudioEntryForm(this.currentFormGroup.value);
  }
}

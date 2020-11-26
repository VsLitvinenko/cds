import { Component, OnInit } from '@angular/core';
import {CurrentRespectComponent} from './entities/components/current-respect/current-respect.component';
import {RespectService} from './entities/services/respect.service';
import {RespectInterface} from './entities/interfaces/respect.interface';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-respect',
  templateUrl: './respect.component.html',
  styleUrls: ['./respect.component.scss'],
})
export class RespectComponent implements OnInit {
  public currentRespectPage = CurrentRespectComponent;
  // tslint:disable:variable-name
  private _searchString: string;
  private _respectList: RespectInterface[];
  public filteredRespectList: RespectInterface[];

  public dateTitle: string;
  private _apiDateString: string;

  public monthShortNames = ['янв', 'фев', 'мав', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
  public dayShortNames = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

  public isDatepickerVisible = false;
  public datesFormGroup: FormGroup = new FormGroup({
    startDate: new FormControl(null),
    endDate: new FormControl(null),
  });

  constructor(private _respect: RespectService) { }

  ngOnInit() {
    this._respect.respects$.subscribe((data) => {
      this._respectList = data;
      this._filterRespects();
    });
    this.datesFormGroup.valueChanges.subscribe((data) => {
      this._stringFromDate(data);
      this._respect.getRespects(this._apiDateString);
    });
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 13);
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 1);
    this.datesFormGroup.setValue({
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
    });
  }

  public searchBar(event): void {
    this._searchString = event.detail.value;
    this._filterRespects();
  }

  public updateRespects(event): void {
    this._respect.getRespects(this._apiDateString);
    event.target.complete();
  }

  public chooseRespectStyle(item: RespectInterface): string {
    if (item.count) {
      return 'success-header';
    }
    else {
      return 'danger-header';
    }
  }

  public changeDatepickerVisible(): void {
    this.isDatepickerVisible = !this.isDatepickerVisible;
  }

  private _filterRespects(): void {
    if (!(this._respectList && this._respectList.length)) {
      this.filteredRespectList = [];
      return;
    }
    else if (!this._searchString) {
      this.filteredRespectList = this._respectList;
      return;
    }
    this.filteredRespectList = this._respectList.filter((item: RespectInterface) => {
      return  item.title.toLowerCase().includes(this._searchString.toLowerCase())
          || item.location.toLowerCase().includes(this._searchString.toLowerCase());
    });
  }

  private _stringFromDate(data): void {
    const s = new Date(data.startDate);
    const sDay = s.getDate();
    const sMonth = s.getMonth() + 1;
    const sYear = s.getFullYear();
    const e = new Date(data.endDate);
    const eDay = e.getDate();
    const eMonth = e.getMonth() + 1;
    const eYear = e.getFullYear();
    this.dateTitle = `Мероприятия с ${sDay > 9 ? sDay : `0${sDay}`}.${sMonth > 9 ? sMonth : `0${sMonth + 1}`}.${sYear}
                      по ${eDay > 9 ? eDay : `0${eDay}`}.${eMonth > 9 ? eMonth : `0${eMonth + 1}`}.${eYear}`;
    this._apiDateString = `startDate=${sYear}-${sMonth}-${sDay}&endDate=${eYear}-${eMonth}-${eDay}`;
  }
}

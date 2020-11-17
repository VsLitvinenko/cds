import { Component, OnInit } from '@angular/core';
import {CurrentRespectComponent} from './entities/components/current-respect/current-respect.component';
import {RespectService} from './entities/services/respect.service';
import {RespectInterface} from './entities/interfaces/respect.interface';

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

  constructor(private _respect: RespectService) { }

  ngOnInit() {
    this._respect.respects$.subscribe((data) => {
      this._respectList = data;
      this._filterRespects();
    });
    this._respect.getRespects();
  }

  public searchBar(event): void {
    this._searchString = event.detail.value;
    this._filterRespects();
  }

  public updateRespects(event): void {
    this._respect.getRespects();
    event.target.complete();
  }

  public chooseRespectStyle(item: RespectInterface): string {
    if (item.imagesCount) {
      return 'success-header';
    }
    else {
      return 'danger-header';
    }
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
          || item.date.toLowerCase().includes(this._searchString.toLowerCase())
          || item.location.toLowerCase().includes(this._searchString.toLowerCase());
    });
  }
}

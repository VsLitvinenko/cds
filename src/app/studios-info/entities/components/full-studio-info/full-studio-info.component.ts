import { Component, OnInit } from '@angular/core';
import {StudiosInfoService} from '../../services/studios-info.service';
import {FullStudioInfoInterface} from '../../interfaces/full-studio-info.interface';
import {CdsComponentClass} from '../../../../common/classes/cds-component-class';

@Component({
  selector: 'app-full-studio-info',
  templateUrl: './full-studio-info.component.html',
  styleUrls: ['./full-studio-info.component.scss'],
})
export class FullStudioInfoComponent extends CdsComponentClass implements OnInit {
  public id: number;
  public isLeaderInfoShows = false;
  public currentFullInfo: FullStudioInfoInterface;
  public imageSize: number;

  // tslint:disable-next-line:variable-name
  constructor(private _studiosService: StudiosInfoService) {
    super();
  }

  ngOnInit() {
    this._studiosService.getFullStudioInfo(this.id);
    this._observeSafe(this._studiosService.fullInfo$)
        .subscribe((data: FullStudioInfoInterface) => {
          this.currentFullInfo = data;
    });
    this.imageSize = window.innerWidth / 3;
  }

  public showOrHideLeaderInfo() {
    this.isLeaderInfoShows = !this.isLeaderInfoShows;
  }

}

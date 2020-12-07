import { Component, OnInit } from '@angular/core';
import {StudiosInfoService} from '../../services/studios-info.service';
import {FullStudioInfoInterface} from '../../interfaces/full-studio-info.interface';
import {CdsComponentClass} from '../../../../common/classes/cds-component-class';
import {PopoverService} from '../../../../common/services/popover.service';
import {ShowImageComponent} from '../../../../menu-other/entities/components/respect/entities/components/show-image/show-image.component';

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
  // tslint:disable:variable-name
  private _showImage = ShowImageComponent;
  constructor(private _studiosService: StudiosInfoService,
              private _popover: PopoverService) {
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

  public async showPicture(id: string, localViewPath: string = null) {
    await this._popover.showModal(this._showImage, {
      id, isUserAdmin: false, studioId: this.id,
    });
  }

}

import { Component, OnInit } from '@angular/core';
import {PopoverService} from '../../../../../../../common/services/popover.service';
import {SharedService} from '../../../../../../../common/services/shared.service';
import {RespectService} from '../../services/respect.service';

@Component({
  selector: 'app-show-image',
  templateUrl: './show-image.component.html',
  styleUrls: ['./show-image.component.scss'],
})
export class ShowImageComponent implements OnInit {
  public showHeadAndFoot = true;
  public id: string;
  public localViewPath: string;
  public isUserAdmin: boolean;
  public respectId: number;

  // tslint:disable:variable-name
  constructor(private _popover: PopoverService,
              private _shared: SharedService,
              private _respect: RespectService) { }

  ngOnInit() {
    this._shared.image$$.subscribe((data) => {
      if (data) {
        this.localViewPath = data;
      }
    });
    if (this.id) {
      this._shared.getCurrentImage(this.id);
    }
  }

  public async hideModal() {
    await this._popover.hideModal();
  }

  public copyImageUrl(): void {
    this._shared.copyToClipboard(this.localViewPath);
  }

  public hideShowHeadAndFoot(): void {
    this.showHeadAndFoot = !this.showHeadAndFoot;
  }

  public deleteImage(): void {
    this._shared.userConfirm('Вы уверены, что хотите удалить изображение?', () => {
      this._respect.deleteRespectImage(this.id, this.respectId);
    }).then();
  }
}

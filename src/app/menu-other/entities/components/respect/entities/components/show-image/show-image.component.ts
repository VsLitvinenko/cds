import { Component, OnInit } from '@angular/core';
import {PopoverService} from '../../../../../../../common/services/popover.service';
import {SharedService} from '../../../../../../../common/services/shared.service';
import {RespectService} from '../../services/respect.service';
import {PhotoService} from '../../services/photo.service';
import {CdsComponentClass} from '../../../../../../../common/classes/cds-component-class';

@Component({
  selector: 'app-show-image',
  templateUrl: './show-image.component.html',
  styleUrls: ['./show-image.component.scss'],
})
export class ShowImageComponent extends CdsComponentClass implements OnInit {
  public showHeadAndFoot = true;
  public id: string;
  public localViewPath: string;
  public isUserAdmin: boolean;
  public respectId: number;
  public studioId: number;

  // tslint:disable:variable-name
  constructor(private _popover: PopoverService,
              private _shared: SharedService,
              private _respect: RespectService,
              private _photo: PhotoService) {
    super();
  }

  ngOnInit() {
    this._observeSafe(this._shared.image$).subscribe((data) => {
      if (data && this.id) {
        this.localViewPath = data;
      }
    });
    if (this.id) {
      this._shared.getCurrentImage(this.id, this.studioId);
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

  private _deleteLocalImage(): void {
    this._photo.deleteCurrentLocalPhoto(this.localViewPath);
    this._popover.hideModal().then();
    this._popover.showToast('Изображение удалено', true).then();
  }

  public deleteImage(): void {
    this._shared.userConfirm('Вы уверены, что хотите удалить изображение?', () => {
      this.id ? this._respect.deleteRespectImage(this.id, this.respectId) : this._deleteLocalImage();
    }).then();
  }
}

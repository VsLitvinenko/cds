import { Component, OnInit } from '@angular/core';
import {PhotoService} from '../../services/photo.service';
import {CurrentDatePhotosInterface} from '../../interfaces/current-date-photos.interface';
import {PopoverService} from '../../../../../../../common/services/popover.service';
import {ShowImageComponent} from '../show-image/show-image.component';
import { RespectService } from '../../services/respect.service';
import {SharedService} from '../../../../../../../common/services/shared.service';
import {RespectInterface} from '../../interfaces/respect.interface';
import {CdsComponentClass} from '../../../../../../../common/classes/cds-component-class';

@Component({
  selector: 'app-current-respect',
  templateUrl: './current-respect.component.html',
  styleUrls: ['./current-respect.component.scss'],
})
export class CurrentRespectComponent extends CdsComponentClass implements OnInit {
  public currentDates: CurrentDatePhotosInterface[];
  public localPhotos: string[];
  public thumbnailSize: number;
  public respect: RespectInterface;
  public isUserAdmin: boolean;

  // tslint:disable:variable-name
  private  _showImage = ShowImageComponent;
  constructor(private _photoService: PhotoService,
              private _popover: PopoverService,
              private _respect: RespectService,
              private _shared: SharedService) {
    super();
  }

  ngOnInit() {
    this._observeSafe(this._respect.curDates$).subscribe((dates: CurrentDatePhotosInterface[]) => {
      this.currentDates = dates;
    });
    this._observeSafe(this._photoService.localPhotos$).subscribe((data) => {
      this.localPhotos = data;
    });
    this._observeSafe(this._shared.isUserAdmin$$).subscribe((data) => {
      this.isUserAdmin = data;
    });

    this._respect.getCurrentDates(this.respect.id);
    this._shared.checkAdminRules();
    this.thumbnailSize = (window.innerWidth - 26) / 4;
  }

  public async fromCamera() {
    await this._photoService.addLocalImage(true);
  }

  public async fromGallery() {
    await this._photoService.addLocalImage(false);
  }

  public async showPicture(id: string, localViewPath: string = null) {
    await this._popover.showModal(this._showImage, {
      id, localViewPath, isUserAdmin: this.isUserAdmin, respectId: this.respect.id,
    });
  }

  public async showInfo() {
    await this._popover.showAlert(`Организатор - ${this.respect.organizer} (тел. - ${this.respect.phone})`);
  }

  public async deleteLocalPhotos() {
    await this._shared.userConfirm(
        'Вы уверены, что хотите отменить загрузку фотографий?',
        () => {
          this._photoService.clearLocalPhotos();
        },
        'Отмена');
  }

  public addLocalPhotos(): void {
    this._respect.addLocalPhotos({id: this.respect.id, data: this.localPhotos});
  }
}

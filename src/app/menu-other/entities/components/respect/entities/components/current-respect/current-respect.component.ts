import { Component, OnInit } from '@angular/core';
import {PhotoService} from '../../services/photo.service';
import {CurrentDatePhotosInterface} from '../../interfaces/current-date-photos.interface';
import {PopoverService} from '../../../../../../../common/services/popover.service';
import {ShowImageComponent} from '../show-image/show-image.component';
import { RespectService } from '../../services/respect.service';
import {PhotoInterface} from '../../interfaces/photo.interface';
import {SharedService} from '../../../../../../../common/services/shared.service';

@Component({
  selector: 'app-current-respect',
  templateUrl: './current-respect.component.html',
  styleUrls: ['./current-respect.component.scss'],
})
export class CurrentRespectComponent implements OnInit {
  public currentDates: CurrentDatePhotosInterface[];
  public localPhotos: string[];
  public thumbnailSize: number;
  public respect: {
    location: string,
    title: string,
    date: string,
    id: number,
  };

  // tslint:disable:variable-name
  private  _showImage = ShowImageComponent;
  constructor(private _photoService: PhotoService,
              private _popover: PopoverService,
              private _respect: RespectService,
              private _shared: SharedService) { }

  ngOnInit() {
    this._respect.curDates$.subscribe((dates: CurrentDatePhotosInterface[]) => {
      this.currentDates = dates;
    });
    this._respect.getCurrentDates(this.respect.id);

    this._photoService.localPhotos$.subscribe((data) => {
      this.localPhotos = data;
    });

    this.thumbnailSize = (window.innerWidth - 26) / 4;
  }

  public async fromCamera() {
    await this._photoService.addLocalImage(true);
  }

  public async fromGallery() {
    await this._photoService.addLocalImage(false);
  }

  public async showPicture(id: number, localViewPath: string = null) {
    await this._popover.showModal(this._showImage, { id, localViewPath });
  }

  public async showInfo() {
    await this._popover.showAlert('Организатор - Твоя мамаша. Телефон - есть у каждого. Комментарий - Ну ты и кадр)))');
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
    console.log(this.localPhotos);
    this._respect.addLocalPhotos({id: this.respect.id, data: this.localPhotos});
  }
}

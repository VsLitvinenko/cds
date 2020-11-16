import { Component, OnInit } from '@angular/core';
import {PhotoService} from '../../services/photo.service';
import {CurrentDatePhotosInterface} from '../../interfaces/current-date-photos.interface';

@Component({
  selector: 'app-current-respect',
  templateUrl: './current-respect.component.html',
  styleUrls: ['./current-respect.component.scss'],
})
export class CurrentRespectComponent implements OnInit {
  public currentDates: CurrentDatePhotosInterface[];

  // tslint:disable-next-line:variable-name
  constructor(private _photoService: PhotoService, ) { }

  ngOnInit() {
    this._photoService.curDates$.subscribe((dates: CurrentDatePhotosInterface[]) => {
      this.currentDates = dates;
    });
    this._photoService.getCurrentDates();
  }

  public async fromCamera() {
    this._photoService.addLocalImage(true).then();
  }

  public async fromGallery() {
    this._photoService.addLocalImage(false).then();
  }
}

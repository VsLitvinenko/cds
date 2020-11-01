import { Component, OnInit } from '@angular/core';
import {PhotoService} from './entities/services/photo.service';

@Component({
  selector: 'app-respect',
  templateUrl: './respect.component.html',
  styleUrls: ['./respect.component.scss'],
})
export class RespectComponent implements OnInit {

  constructor(public photoService: PhotoService) { }

  ngOnInit() {}

  addPhotoToGallery() {
    this.photoService.addNewToGallery().then();
  }
}

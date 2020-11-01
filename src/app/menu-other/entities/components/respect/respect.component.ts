import { Component, OnInit } from '@angular/core';
import {PhotoService} from './entities/services/photo.service';
import {PopoverService} from '../../../../common/api/popover.service';

@Component({
  selector: 'app-respect',
  templateUrl: './respect.component.html',
  styleUrls: ['./respect.component.scss'],
})
export class RespectComponent implements OnInit {

  constructor(public photoService: PhotoService, private popover: PopoverService) { }

  ngOnInit() {
    this.popover.showToast('dfdfdfdfdf');
  }
}

import { Component, OnInit } from '@angular/core';
import {PhotoService} from '../../services/photo.service';

@Component({
  selector: 'app-current-respect',
  templateUrl: './current-respect.component.html',
  styleUrls: ['./current-respect.component.scss'],
})
export class CurrentRespectComponent implements OnInit {

  constructor(public photoService: PhotoService,) { }

  ngOnInit() {}

}

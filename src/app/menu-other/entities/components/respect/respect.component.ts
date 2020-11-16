import { Component, OnInit } from '@angular/core';
import {CurrentRespectComponent} from './entities/components/current-respect/current-respect.component';

@Component({
  selector: 'app-respect',
  templateUrl: './respect.component.html',
  styleUrls: ['./respect.component.scss'],
})
export class RespectComponent implements OnInit {
  public currentRespectPage = CurrentRespectComponent;

  constructor() { }

  ngOnInit() {
  }
}

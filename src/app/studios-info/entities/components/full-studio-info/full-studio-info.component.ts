import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-studio-info',
  templateUrl: './full-studio-info.component.html',
  styleUrls: ['./full-studio-info.component.scss'],
})
export class FullStudioInfoComponent implements OnInit {
  public id: number;
  public isLeaderInfoShows = false;

  constructor() { }

  ngOnInit() {}

  public showOrHideLeaderInfo() {
    this.isLeaderInfoShows = !this.isLeaderInfoShows;
  }

}

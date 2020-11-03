import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  public userPrefersDark: boolean;
  constructor() { }

  ngOnInit() {
    if (window.matchMedia) {
      this.userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
  }

  public changeToggle(): void {
    this.userPrefersDark = !this.userPrefersDark;
  }

}

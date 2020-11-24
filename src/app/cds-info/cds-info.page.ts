import { Component } from '@angular/core';
import {PreferColorSchemeService} from '../common/services/prefer-color-scheme.service';
import {BarButtonInterface} from './entities/interfaces/bar-button.interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'cds-info.page.html',
  styleUrls: ['cds-info.page.scss']
})
export class CdsInfoPage {
  public barButtonSize: number;
  public barButtonsList: BarButtonInterface[];

  // tslint:disable-next-line:variable-name
  constructor(private _preferColor: PreferColorSchemeService) {
    this.barButtonSize = (window.innerWidth - 44) / 3;

    this.barButtonsList = [
      {
        icon: 'information',
        text: 'О нас',
      },
      {
        icon: 'help',
        text: 'О приложении',
      },
      {
        icon: 'people',
        text: 'Контакты',
      },
      {
        icon: 'logo-vk',
        text: 'Наш паблик',
      },
      {
        icon: 'logo-chrome',
        text: 'Наш сайт',
      },
    ];
  }

  public headerColor(): string {
    return this._preferColor.isUserPrefersDark() ? 'dark' : 'light';
  }
}

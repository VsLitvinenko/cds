import { Component } from '@angular/core';
import {PreferColorSchemeService} from '../common/services/prefer-color-scheme.service';
import {PopoverService} from '../common/services/popover.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'cds-info.page.html',
  styleUrls: ['cds-info.page.scss']
})
export class CdsInfoPage {
  public barButtonSize: number;

  // tslint:disable:variable-name
  constructor(private _preferColor: PreferColorSchemeService,
              private _popover: PopoverService) {
    this.barButtonSize = (window.innerWidth - 44) / 3;
  }

  public headerColor(): string {
    return this._preferColor.isUserPrefersDark() ? 'dark' : 'light';
  }

  public aboutUs(): void {
    const message = 'Арт-пространство ЦДС позволяет обучающимся свободно обмениваться информацией по различным темам и интересам,' +
        'а также развить у молодежи креативные навыки и коммуникабельность.' +
        'Досуговая направленность Центра имеет широкий спектр возможностей, где каждый может найти клуб или творческую студию по душе.';
    this._popover.showAlert(message, 'О нас').then();
  }

  public aboutApp(): void {
    const message = 'С официальным приложением ЦДС вы будете всегда в курсе всех событий! Здесь Вы можете узнать актуальное расписание мероприятий ЦДС, ' +
        'их организаторов, проверить сданные после мероприятий помещения и объекты, а также узнать главную информацию о любой студии, и записаться в нее';
    this._popover.showAlert(message, 'О приложении').then();
  }

  public redirectToWebsite(): void {
    window.open('https://vk.com/id129934720');
  }
}

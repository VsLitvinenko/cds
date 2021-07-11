import { Component } from '@angular/core';
import {PreferColorSchemeService} from '../common/services/prefer-color-scheme.service';
import {PopoverService} from '../common/services/popover.service';
import {CdsInfoService} from './entities/services/cds-info.service';
import {TodayEventsInterface} from './entities/interfaces/today-events.interface';
import {CdsComponentClass} from '../common/classes/cds-component-class';

@Component({
  selector: 'app-tab1',
  templateUrl: 'cds-info.page.html',
  styleUrls: ['cds-info.page.scss']
})
export class CdsInfoPage extends CdsComponentClass {
  public barButtonSize: number;
  public tEvents: TodayEventsInterface;

  // tslint:disable:variable-name
  constructor(private _preferColor: PreferColorSchemeService,
              private _popover: PopoverService,
              private _cdsService: CdsInfoService) {
    super();
    this._calculateButtonsSize();
    this._cdsService.getTEvents();
    this._observeSafe(this._cdsService.tEvents$)
        .subscribe((data: TodayEventsInterface) => {
          this.tEvents = data;
    });
  }

  public onWindowResize(): void {
    this._calculateButtonsSize();
  }

  public headerColor(): string {
    return this._preferColor.isUserPrefersDark() ? 'dark' : 'light';
  }

  public aboutUs(): void {
    const message = 'Арт-пространство Центра Досуга Студентов РГУ нефти и газа имени И.М.Губкина (ЦДС) позволяет обучающимся свободно обмениваться ' +
        'информацией по различным темам и интересам, а также развить у молодежи креативные навыки и коммуникабельность. ' +
        'Досуговая направленность Центра имеет широкий спектр возможностей, где каждый может найти клуб или творческую студию по душе.';
    this._popover.showAlert(message, 'О нас').then();
  }

  public aboutApp(): void {
    const message = 'С официальным приложением Центра Досуга Студентов РГУ нефти и газа имени И.М.Губкина (ЦДС) вы будете всегда в курсе всех событий! ' +
        'Здесь Вы можете узнать актуальное расписание мероприятий ЦДС, их организаторов, проверить сданные после мероприятий помещения и объекты, ' +
        'а также узнать главную информацию о любой студии, и записаться в нее';
    this._popover.showAlert(message, 'О приложении').then();
  }

  public redirectToWebsite(): void {
    window.open('http://dk.gubkin.ru/cds-main');
  }

  private _calculateButtonsSize(): void {
    this.barButtonSize = (window.innerWidth - 44) / 3;
    if (this.barButtonSize > 200) {
      this.barButtonSize = 200;
    }
  }
}

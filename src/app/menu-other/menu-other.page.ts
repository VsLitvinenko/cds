import { Component } from '@angular/core';
import {NavigationItemInterface} from './entities/interfaces/navigation-item.interface';
import {MapComponent} from './entities/components/map/map.component';
import {RespectComponent} from './entities/components/respect/respect.component';
import {ContactsComponent} from './entities/components/contacts/contacts.component';
import {SettingsComponent} from './entities/components/settings/settings.component';

@Component({
  selector: 'app-menu-other',
  templateUrl: 'menu-other.page.html',
  styleUrls: ['menu-other.page.scss']
})
export class MenuOtherPage {

  public listItems: NavigationItemInterface[];

  constructor() {
    this.listItems = [
      {
        tittle: 'Карта',
        icon: 'navigate',
        color: '#CC3333',
        component: MapComponent,
      },
      {
        tittle: 'Уважение',
        icon: 'images',
        color: '#CC6600',
        component: RespectComponent,
      },
      {
        tittle: 'Контакты',
        icon: 'people',
        color: '#006699',
        component: ContactsComponent,
      },
      {
        tittle: 'Параметры',
        icon: 'settings',
        color: '#666666',
        component: SettingsComponent,
      },
    ];
  }
}

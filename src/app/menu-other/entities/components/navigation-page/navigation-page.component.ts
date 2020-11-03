import { Component, OnInit} from '@angular/core';
import {NavigationItemInterface} from './interfaces/navigation-item.interface';
import {MapComponent} from '../map/map.component';
import {RespectComponent} from '../respect/respect.component';
import {ContactsComponent} from '../contacts/contacts.component';
import {SettingsComponent} from '../settings/settings.component';

@Component({
  selector: 'app-navigation',
  templateUrl: 'navigation-page.component.html',
  styleUrls: ['navigation-page.component.scss']
})
export class NavigationPageComponent implements OnInit {
  public listItems: NavigationItemInterface[];

  constructor() {}

  ngOnInit() {
    this.listItems = [
      {
        tittle: 'Карта',
        icon: 'navigate',
        color: '#6633CC',
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
        color: '#6b3d6b',
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

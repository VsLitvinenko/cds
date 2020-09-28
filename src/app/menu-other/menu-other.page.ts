import { Component, OnInit } from '@angular/core';
import {ListItemInterface} from "./entities/interfaces/list-item.interface";

@Component({
  selector: 'app-menu-other',
  templateUrl: 'menu-other.page.html',
  styleUrls: ['menu-other.page.scss']
})
export class MenuOtherPage implements OnInit {
  public listItems: ListItemInterface[];

  constructor() {}

  ngOnInit() {
    this.listItems = [
      {
        tittle: 'Карта',
        icon: 'navigate-outline',
        color: '#6633CC'
      },
      {
        tittle: 'Мероприятия',
        icon: 'beer-outline',
        color: '#CC3333'
      },
      {
        tittle: 'Уважение',
        icon: 'images-outline',
        color: '#CC6600'
      },
      {
        tittle: 'Контакты',
        icon: 'people-outline',
        color: '#666'
      },
    ]
  }
}

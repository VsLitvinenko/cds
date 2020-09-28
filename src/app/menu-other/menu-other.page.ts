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
        color: '#412159'
      },
      {
        tittle: 'Мероприятия',
        icon: 'beer-outline',
        color: '#412159'
      },
      {
        tittle: 'Уважение',
        icon: 'images-outline',
        color: '#412159'
      },
      {
        tittle: 'Контакты',
        icon: 'people-outline',
        color: '#412159'
      },
    ]
  }
}

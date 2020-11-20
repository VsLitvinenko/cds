import { Component } from '@angular/core';
import {NavigationPageComponent} from './entities/components/navigation-page/navigation-page.component';

@Component({
  selector: 'app-menu-other',
  templateUrl: 'menu-other.page.html',
  styleUrls: ['menu-other.page.scss']
})
export class MenuOtherPage {
  public navigationPage = NavigationPageComponent;

  constructor() { }
}

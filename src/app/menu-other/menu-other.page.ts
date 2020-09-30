import { Component, ViewChild } from '@angular/core';
import {NavigationPageComponent} from './entities/components/navigation-page/navigation-page.component';
import {TabService} from '../tabs/entities/services/tab.service';
import { IonNav } from '@ionic/angular';

@Component({
  selector: 'app-menu-other',
  templateUrl: 'menu-other.page.html',
  styleUrls: ['menu-other.page.scss']
})
export class MenuOtherPage {
  @ViewChild('nav', {static: false}) nav: IonNav;
  public navigationRoot = NavigationPageComponent;

  // tslint:disable-next-line:variable-name
  constructor(private _tabService: TabService) {
    this._tabService.currentTab$.subscribe((newTab: string) => {
      if (this.nav) {
        this.nav.popToRoot().then();
      }
    });
  }

}

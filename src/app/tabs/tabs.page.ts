import { Component } from '@angular/core';
import {TabService} from './entities/services/tab.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  // tslint:disable-next-line:variable-name
  constructor(private _tabService: TabService) {}

  public changeTab(newTab: string): void {
    this._tabService.changeCurrentTab(newTab);
  }
}

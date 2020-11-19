import {Component, HostListener} from '@angular/core';
import {TabService} from './entities/services/tab.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})

export class TabsPage {
  public isTabsVisible = true;
  // tslint:disable-next-line:variable-name
  private _defaultHeight: number;

  // tslint:disable-next-line:variable-name
  constructor(private _tabService: TabService) {
    this._defaultHeight = window.innerHeight;
  }

  public changeTab(newTab: string): void {
    this._tabService.changeCurrentTab(newTab);
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
    alert('здорова');
    this._tabService.changeCurrentTab('back');
  }

  public onResize(event) {
    this.isTabsVisible = event.target.innerHeight < this._defaultHeight;
  }
}

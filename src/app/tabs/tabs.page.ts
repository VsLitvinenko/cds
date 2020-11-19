import {Component, HostListener} from '@angular/core';
import {TabService} from './entities/services/tab.service';
import {Platform} from '@ionic/angular';
import {PopoverService} from '../common/services/popover.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})

export class TabsPage {
  public isTabsVisible = true;
  // tslint:disable-next-line:variable-name
  private _defaultHeight: number;

  // tslint:disable:variable-name
  constructor(
      private _tabService: TabService,
      private _platform: Platform,
      public popover: PopoverService,
  )
  {
    this._defaultHeight = window.innerHeight;

    this._platform.backButton.subscribe( () => {
      this._tabService.changeCurrentTab('back');
    });
  }

  public changeTab(newTab: string): void {
    this._tabService.changeCurrentTab(newTab);
  }

  // @HostListener('window:popstate', ['$event'])
  // onPopState(event) {
  //   alert('здорова');
  //   this._tabService.changeCurrentTab('back');
  // }

  public onResize(event) {
    this.isTabsVisible = event.target.innerHeight < this._defaultHeight;
  }
}

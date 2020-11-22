import {Component, ViewChild} from '@angular/core';
import {TabService} from './entities/services/tab.service';
import {IonTabs, Platform} from '@ionic/angular';
import {PopoverService} from '../common/services/popover.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})

export class TabsPage {
  @ViewChild('tabs', {static: false}) tabs: IonTabs;
  public isTabsVisible = true;
  // tslint:disable-next-line:variable-name
  // private _defaultHeight: number;

  // tslint:disable:variable-name
  constructor(private _tabService: TabService,
              private _platform: Platform,
              private _popover: PopoverService) {
    // this._defaultHeight = window.innerHeight;
    this._tabService.newTab$.subscribe((redirectTab: string) => {
      this.tabs?.select(redirectTab).then();
    });
    this._platform.backButton.subscribe( () => {
      if (this.tabs.getSelected() === 'cds-info') {
        navigator['app'].exitApp();
      }
      else if (!this._popover.isPopoverPresented) {
        this._tabService.changeCurrentTab('back', this.tabs.getSelected());
      }
    });
  }

  // public changeTab(newTab: string): void {
  //   this._tabService.changeCurrentTab(newTab);
  // }

  // public onResize(event) {
  //   this.isTabsVisible = this._defaultHeight <= event.target.innerHeight;
  // }
}

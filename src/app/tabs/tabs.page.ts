import {Component, OnInit} from '@angular/core';
import {TabService} from './entities/services/tab.service';
import {Platform} from '@ionic/angular';
import {PopoverService} from '../common/services/popover.service';
import {SharedService} from '../common/services/shared.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})

export class TabsPage implements OnInit {
  public tabs: { id: string, selected: boolean, name: string, icon: string }[];

  // tslint:disable:variable-name
  constructor(private _tabService: TabService,
              private _platform: Platform,
              private _popover: PopoverService,
              private _shared: SharedService)
  {
    this.tabs = [
      { id: '1', selected: true, name: 'ЦДС', icon: 'game-controller-outline' },
      { id: '2', selected: false, name: 'Студии', icon: 'flame-outline' },
      { id: '3', selected: false, name: 'Мероприятия', icon: 'calendar-outline' },
      { id: '4', selected: false, name: 'Прочее', icon: 'grid-outline' },
    ];
  }

  ngOnInit() {
    setTimeout(() => {
      this._shared.checkAdminRules();
    }, 1000);
    this._platform.backButton.subscribe( () => {
      if (this.tabs[0].selected) {
        navigator['app'].exitApp();
      }
      else if (!this._popover.isPopoverPresented) {
        this.changeTab('back');
      }
    });
    this._tabService.nextTab$.subscribe((newTabId: string) => {
      this.changeTab(newTabId);
    });
  }

  public changeTab(tabId: string): void {
    let alreadySelected: boolean;
    this.tabs.forEach((tab) => {
      if (tab.selected && tab.id === tabId) {
        alreadySelected = true;
      }
      tab.selected = tab.id === tabId;
    });
    if (!alreadySelected) {
      this._tabService.changeCurrentTabManually(tabId);
    }
  }
}

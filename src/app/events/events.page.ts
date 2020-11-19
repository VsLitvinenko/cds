import {Component, OnInit, ViewChild} from '@angular/core';
import {IonNav} from '@ionic/angular';
import {EventTableComponent} from './entities/components/event-table/event-table.component';
import {TabService} from '../tabs/entities/services/tab.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  @ViewChild('nav', {static: false}) nav: IonNav;
  public navigationRoot = EventTableComponent;

  // tslint:disable-next-line:variable-name
  constructor(private _tabService: TabService) {
    this._tabService.currentTab$.subscribe((newTab: string) => {
      this.nav?.canGoBack().then((allow: boolean) => {
        if (allow && newTab === 'back') {
          this.nav.pop().then();
        }
        else if (allow) {
          this.nav.popToRoot().then();
        }
      });
    });
  }

  ngOnInit() {
  }

}

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
      if (this.nav) {
        if (newTab === 'back') {
          this.nav.pop().then();
        }
        else {
          this.nav.popToRoot().then();
        }
      }
    });
  }

  ngOnInit() {
  }

}

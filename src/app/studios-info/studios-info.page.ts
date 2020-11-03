import {Component, ViewChild} from '@angular/core';
import {IonNav} from '@ionic/angular';
import {TabService} from '../tabs/entities/services/tab.service';
import {StudiosListComponent} from './entities/components/studios-list/studios-list.component';

@Component({
  selector: 'app-studios-info',
  templateUrl: 'studios-info.page.html',
  styleUrls: ['studios-info.page.scss']
})
export class StudiosInfoPage {
  @ViewChild('nav', {static: false}) nav: IonNav;
  public navigationRoot = StudiosListComponent;
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

}

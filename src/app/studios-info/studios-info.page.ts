import {Component, ViewChild} from '@angular/core';
import {IonNav} from '@ionic/angular';
import {EntryFormComponent} from './entities/components/entry-form/entry-form.component';
import {TabService} from '../tabs/entities/services/tab.service';

@Component({
  selector: 'app-studios-info',
  templateUrl: 'studios-info.page.html',
  styleUrls: ['studios-info.page.scss']
})
export class StudiosInfoPage {
  @ViewChild('nav', {static: false}) nav: IonNav;
  public navigationRoot = EntryFormComponent;
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

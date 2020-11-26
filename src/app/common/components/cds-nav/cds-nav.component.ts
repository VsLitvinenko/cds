import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {TabService} from '../../../tabs/entities/services/tab.service';
import {IonNav} from '@ionic/angular';
import {CdsInfoPage} from '../../../cds-info/cds-info.page';
import {StudiosInfoPage} from '../../../studios-info/studios-info.page';
import {EventsPage} from '../../../events/events.page';
import {MenuOtherPage} from '../../../menu-other/menu-other.page';

@Component({
  selector: 'app-cds-nav',
  templateUrl: './cds-nav.component.html',
  styleUrls: ['./cds-nav.component.scss'],
})
export class CdsNavComponent implements OnInit {
  @ViewChild('nav', {static: false}) nav: IonNav;

  public tabNavs = [CdsInfoPage, StudiosInfoPage, EventsPage, MenuOtherPage];

  // tslint:disable-next-line:variable-name
  constructor(private _tabService: TabService) { }

  ngOnInit() {
    this._tabService.currentTab$.subscribe((answer: string) => {
      if (!answer) {
        return;
      }
      this.nav?.canGoBack().then((allow: boolean) => {
        if (answer === 'back' && allow) {
          this.nav.pop().then();
        }
        else if (allow) {
          this.nav.popToRoot().then();
        }
      });
      if (['1', '2', '3', '4'].includes(answer)) {
        this.nav.setRoot(this.tabNavs[+answer - 1]).then();
      }
    });
  }
}

import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {TabService} from '../../../tabs/entities/services/tab.service';
import {IonNav} from '@ionic/angular';

@Component({
  selector: 'app-cds-nav',
  templateUrl: './cds-nav.component.html',
  styleUrls: ['./cds-nav.component.scss'],
})
export class CdsNavComponent implements OnInit {
  @Input() navigationRoot: any;
  @Input() currentTabName: string;
  @ViewChild('nav', {static: false}) nav: IonNav;

  // tslint:disable-next-line:variable-name
  constructor(private _tabService: TabService) { }

  ngOnInit() {
    this._tabService.currentTab$.subscribe((answer: string[]) => {
      this.nav?.canGoBack().then((allow: boolean) => {
        if (allow && answer[0] === 'back') {
          this.nav.pop().then();
        }
        else if (!allow && answer[0] === 'back' && answer[1] === this.currentTabName) {
          this._tabService.redirectUserToTab('cds-info');
        }
        else if (allow) {
          this.nav.popToRoot().then();
        }
      });
    });
  }
}

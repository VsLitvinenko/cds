import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {TabService} from '../../../tabs/entities/services/tab.service';
import {IonNav, Platform} from '@ionic/angular';

@Component({
  selector: 'app-cds-nav',
  templateUrl: './cds-nav.component.html',
  styleUrls: ['./cds-nav.component.scss'],
})
export class CdsNavComponent implements OnInit {
  @Input() navigationRoot: any;
  @ViewChild('nav', {static: false}) nav: IonNav;

  // tslint:disable-next-line:variable-name
  constructor(private _tabService: TabService, private _platform: Platform) { }

  ngOnInit() {
    this._platform.backButton.subscribe( () => {
      this.nav?.canGoBack().then((allow: boolean) => {
        if (allow) {
          this.nav.pop().then();
        }
        else {
          navigator['app'].exitApp();
        }
      });
    });

    this._tabService.currentTab$.subscribe((newTab: string) => {
      this.nav?.canGoBack().then((allow: boolean) => {
        if (allow && newTab === 'back') {
          this.nav.pop().then();
        } else if (allow) {
          this.nav.popToRoot().then();
        }
      });
    });
  }
}

import { Component } from '@angular/core';
import {PreferColorSchemeService} from '../common/services/prefer-color-scheme.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'cds-info.page.html',
  styleUrls: ['cds-info.page.scss']
})
export class CdsInfoPage {

  // tslint:disable-next-line:variable-name
  constructor(private _preferColor: PreferColorSchemeService) {
  }

  public headerColor(): string {
    return this._preferColor.isUserPrefersDark() ? 'dark' : 'light';
  }

}

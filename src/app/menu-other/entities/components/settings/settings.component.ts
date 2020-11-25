import {Component, OnInit, } from '@angular/core';
import {PreferColorSchemeService} from '../../../../common/services/prefer-color-scheme.service';
import {CheckAdminRulesComponent} from './components/check-admin-rules/check-admin-rules.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  public userPrefersDark: boolean;
  public PasswordComponent = CheckAdminRulesComponent;
  // tslint:disable:variable-name
  constructor(private _preferColorScheme: PreferColorSchemeService) { }

  ngOnInit() {
    this.userPrefersDark = this._preferColorScheme.isUserPrefersDark();
  }

  public changeToggle(): void {
    this._preferColorScheme.toggleColorScheme();
  }

}

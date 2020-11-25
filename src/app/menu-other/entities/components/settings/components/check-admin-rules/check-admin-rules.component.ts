import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {SharedService} from '../../../../../../common/services/shared.service';

@Component({
  selector: 'app-check-admin-rules',
  templateUrl: './check-admin-rules.component.html',
  styleUrls: ['./check-admin-rules.component.scss'],
})
export class CheckAdminRulesComponent implements OnInit {
  public passFormControl = new FormControl(null, Validators.required);

  // tslint:disable-next-line:variable-name
  constructor(private _shared: SharedService) { }

  ngOnInit() {}

  public bigBlueButton(): void {
    localStorage.setItem('secretPas', this.passFormControl.value);
    this._shared.checkAdminRules(true).then();
  }
}

import { Component, OnInit } from '@angular/core';
import {PopoverService} from '../../../../../../../common/services/popover.service';

@Component({
  selector: 'app-show-image',
  templateUrl: './show-image.component.html',
  styleUrls: ['./show-image.component.scss'],
})
export class ShowImageComponent implements OnInit {
  public showHeadAndFoot = true;

  // tslint:disable-next-line:variable-name
  constructor(private _popover: PopoverService) { }

  ngOnInit() {}

  public async hideModal() {
    await this._popover.hideModal();
  }

  public hideShowHeadAndFoot() {
    this.showHeadAndFoot = !this.showHeadAndFoot;
  }
}

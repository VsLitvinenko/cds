import { Component, OnInit } from '@angular/core';
import {PopoverService} from '../../../../../../../common/services/popover.service';

@Component({
  selector: 'app-show-image',
  templateUrl: './show-image.component.html',
  styleUrls: ['./show-image.component.scss'],
})
export class ShowImageComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor(private _popover: PopoverService) { }

  ngOnInit() {}

  public async hideModal() {
    await this._popover.hideModal();
  }
}

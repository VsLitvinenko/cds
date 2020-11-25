import { Component, OnInit } from '@angular/core';
import {PopoverService} from '../../../../../../../common/services/popover.service';
import {SharedService} from '../../../../../../../common/services/shared.service';

@Component({
  selector: 'app-show-image',
  templateUrl: './show-image.component.html',
  styleUrls: ['./show-image.component.scss'],
})
export class ShowImageComponent implements OnInit {
  public showHeadAndFoot = true;
  public id: string;
  public localViewPath: string;

  // tslint:disable-next-line:variable-name
  constructor(private _popover: PopoverService, public shared: SharedService) { }

  ngOnInit() {
    this.shared.image$$.subscribe((data) => {
      if (data) {
        this.localViewPath = data;
      }
    });
    if (this.id) {
      this.shared.getCurrentImage(this.id);
    }
  }

  public async hideModal() {
    await this._popover.hideModal();
  }

  public copyImageUrl(): void {
    this.shared.copyToClipboard(this.localViewPath);
  }

  public hideShowHeadAndFoot() {
    this.showHeadAndFoot = !this.showHeadAndFoot;
  }
}

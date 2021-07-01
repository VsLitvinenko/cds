import {Component, } from '@angular/core';
import {EntryFormComponent} from './entities/components/entry-form/entry-form.component';
import {StudioItemInterface} from './entities/interfaces/studio-item.interface';
import {StudiosInfoService} from './entities/services/studios-info.service';
import {FullStudioInfoComponent} from './entities/components/full-studio-info/full-studio-info.component';
import {CdsComponentClass} from '../common/classes/cds-component-class';

@Component({
  selector: 'app-studios-info',
  templateUrl: 'studios-info.page.html',
  styleUrls: ['studios-info.page.scss']
})
export class StudiosInfoPage extends CdsComponentClass {
  public entryForm = EntryFormComponent;
  public fullInfo = FullStudioInfoComponent;
  public studiosList: StudioItemInterface[][];

  // tslint:disable-next-line:variable-name
  constructor(private _studiosService: StudiosInfoService) {
    super();
    this._observeSafe(this._studiosService.studioItems$)
        .subscribe((data: StudioItemInterface[][]) => {
          this.studiosList = data;
    });
    if (!this.studiosList?.length) {
      this._studiosService.getStudioItems();
    }
  }

  public updateStudios(event): void {
    this._studiosService.getStudioItems();
    event.target.complete();
  }
}

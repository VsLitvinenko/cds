import {Component, } from '@angular/core';
import {EntryFormComponent} from './entities/components/entry-form/entry-form.component';
import {StudioItemInterface} from './entities/interfaces/studio-item.interface';
import {StudiosInfoService} from './entities/services/studios-info.service';

@Component({
  selector: 'app-studios-info',
  templateUrl: 'studios-info.page.html',
  styleUrls: ['studios-info.page.scss']
})
export class StudiosInfoPage {
  public entryForm = EntryFormComponent;
  public studiosList: StudioItemInterface[];

  // tslint:disable-next-line:variable-name
  constructor(private _studiosService: StudiosInfoService) {
    this._studiosService.getStudioItems();
    this._studiosService.studioItems$.subscribe((data: StudioItemInterface[]) => {
      this.studiosList = data;
    });
  }
}

import {Component, } from '@angular/core';
import {StudiosListComponent} from './entities/components/studios-list/studios-list.component';

@Component({
  selector: 'app-studios-info',
  templateUrl: 'studios-info.page.html',
  styleUrls: ['studios-info.page.scss']
})
export class StudiosInfoPage {
  public studiosList = StudiosListComponent;

  constructor() { }
}

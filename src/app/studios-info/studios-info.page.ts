import {Component, } from '@angular/core';
import {EntryFormComponent} from './entities/components/entry-form/entry-form.component';

@Component({
  selector: 'app-studios-info',
  templateUrl: 'studios-info.page.html',
  styleUrls: ['studios-info.page.scss']
})
export class StudiosInfoPage {
  public entryForm = EntryFormComponent;

  constructor() { }
}

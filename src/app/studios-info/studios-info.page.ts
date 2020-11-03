import {Component, ViewChild} from '@angular/core';
import {IonNav} from '@ionic/angular';
import {EntryFormComponent} from './entities/components/entry-form/entry-form.component';

@Component({
  selector: 'app-studios-info',
  templateUrl: 'studios-info.page.html',
  styleUrls: ['studios-info.page.scss']
})
export class StudiosInfoPage {
  @ViewChild('nav', {static: false}) nav: IonNav;
  public navigationRoot = EntryFormComponent;
  constructor() {}

}

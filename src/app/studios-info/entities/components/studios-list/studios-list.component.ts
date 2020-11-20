import { Component, OnInit } from '@angular/core';
import {EntryFormComponent} from '../entry-form/entry-form.component';

@Component({
  selector: 'app-studios-list',
  templateUrl: './studios-list.component.html',
  styleUrls: ['./studios-list.component.scss'],
})
export class StudiosListComponent implements OnInit {
  public entryForm = EntryFormComponent;

  constructor() { }

  ngOnInit() {}

}

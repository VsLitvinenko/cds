import { Component, OnInit } from '@angular/core';
import {ContactsService} from './services/contacts.service';
import {CdsComponentClass} from '../../../../common/classes/cds-component-class';
import {ContactsInterface} from './interfaces/contacts.interface';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent extends CdsComponentClass implements OnInit {
  public contactsList: ContactsInterface[];

  // tslint:disable:variable-name
  constructor(private _contactsService: ContactsService) {
    super();
  }

  ngOnInit() {
    this._observeSafe(this._contactsService.contactsList$).subscribe((data: ContactsInterface[]) => {
      if (data && data.length) {
        this.contactsList = data;
      }
    });
    this._contactsService.getContacts();
  }

}

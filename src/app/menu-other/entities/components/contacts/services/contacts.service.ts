import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {ApiService} from '../../../../../common/services/api.service';
import {PopoverService} from '../../../../../common/services/popover.service';
import {ApiResponse} from '../../../../../common/interfaces/api-response.interface';
import {ContactsInterface} from '../interfaces/contacts.interface';

@Injectable()
export class ContactsService {
    // tslint:disable:variable-name

    private _contactsList$$: BehaviorSubject<ContactsInterface[]> = new BehaviorSubject(null);
    public contactsList$: Observable<ContactsInterface[]> = this._contactsList$$ as Observable<ContactsInterface[]>;

    constructor(private _api: ApiService, private _popover: PopoverService) {
    }

    public getContacts(): void {
        this._api.get(`getContacts`).then((answer: ApiResponse<any>) => {
            if (answer) {
                if (answer.success) {
                    this._popover.hidePreloader({success: true}).then();
                    this._contactsList$$.next(answer.data);
                } else {
                    this._popover.hidePreloader({
                        success: false,
                        message: answer.reason,
                    }).then();
                }
            }
        });
    }
}

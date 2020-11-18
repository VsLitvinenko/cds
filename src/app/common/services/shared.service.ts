import { Injectable } from '@angular/core';
import {PopoverService} from './popover.service';

@Injectable()
export class SharedService {

    // tslint:disable-next-line:variable-name
    constructor(private _popover: PopoverService) {
    }

    public async userConfirm(message: string, handler, header = 'Подтвердите действие') {
        await this._popover.showAlert(
            message,
            header,
            [
                {
                    text: 'Отмена',
                },
                {
                    text: 'ОК',
                    handler,
                }
            ]
        );
    }
}

import { Injectable } from '@angular/core';
import {PopoverService} from './popover.service';
import {ApiService} from './api.service';
import {ApiResponse} from '../interfaces/api-response.interface';
import {BehaviorSubject} from 'rxjs';
import { Plugins } from '@capacitor/core';

const { Clipboard } = Plugins;

@Injectable()
export class SharedService {
    public isUserAdmin = false;
    public image$$: BehaviorSubject<string> = new BehaviorSubject(null);
    // tslint:disable:variable-name
    constructor(private _popover: PopoverService,
                private _api: ApiService) {
    }

    public async userConfirm(message: string, handler, header = 'Подтвердите действие') {
        await this._popover.showAlert(
            message, header,
            [{ text: 'Отмена' }, { text: 'ОК', handler }] );
    }

    public async checkAdminRules(showSuccessToast: boolean = false) {
        const pas = localStorage.getItem('secretPas');
        if (!pas) {
            return;
        }
        this._api.post('checkAdminRules', { password: pas }).then((answer: ApiResponse<any>) => {
            if (answer && answer.success) {
                this.isUserAdmin = answer.data;
                if (answer.data) {
                    localStorage.setItem('secretPas', pas);
                    this._popover.hidePreloader( { success: true, message: showSuccessToast ? 'Ваш пароль подтвержден' : null });
                }
                else {
                    this._popover.hidePreloader( { success: false, message: 'Неверный пароль (возможно, он устарел)' });
                    localStorage.setItem('secretPas', '');
                }
            }
        });
    }

    public getCurrentImage(id: string): void  {
        this._api.get(`getFullImage?id=${id}`).then((answer: ApiResponse<any>) => {
            if (answer) {
                if (answer.success) {
                    this._popover.hidePreloader({ success: true }).then();
                    this.image$$.next(answer.data);
                } else {
                    this._popover.hidePreloader({
                        success: false,
                        message: answer.reason,
                    }).then();
                }
            }
        });
    }

    public copyToClipboard(data: string): void {
        Clipboard.write({
            string: `${data}\nСкопировано из официального приложения ЦДС`,
        }).then(() => {
            this._popover.showToast('Скопировано в буфер обмена', true).then();
        });
    }
}

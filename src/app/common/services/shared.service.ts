import { Injectable } from '@angular/core';
import {PopoverService} from './popover.service';
import {ApiService} from './api.service';
import {ApiResponse} from '../interfaces/api-response.interface';
import {BehaviorSubject, Observable} from 'rxjs';
import { Plugins } from '@capacitor/core';

const { Clipboard } = Plugins;

@Injectable()
export class SharedService {
    // tslint:disable:variable-name
    public isUserAdmin$$: BehaviorSubject<boolean> = new BehaviorSubject(false);
    private _image$$: BehaviorSubject<string> = new BehaviorSubject(null);
    public image$: Observable<string> = this._image$$ as Observable<string>;
    constructor(private _popover: PopoverService,
                private _api: ApiService) {
    }

    public async userConfirm(message: string, handler, header = 'Подтвердите действие') {
        await this._popover.showAlert(
            message, header,
            [{ text: 'Отмена' }, { text: 'ОК', handler }] );
    }

    public checkAdminRules(showSuccessToast: boolean = false) {
        const pas = localStorage.getItem('secretPas');
        if (!pas) {
            return;
        }
        this._api.post('checkAdminRules', { password: pas }).then((answer: ApiResponse<any>) => {
            if (answer && answer.success) {
                this.isUserAdmin$$.next(answer.data);
                if (answer.data) {
                    localStorage.setItem('secretPas', pas);
                    this._popover.hidePreloader( { success: true, message: showSuccessToast ? 'Ваш пароль подтвержден' : null }).then();
                }
                else {
                    this._popover.hidePreloader( { success: false, message: 'Неверный пароль (возможно, он устарел)' }).then();
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
                    this._image$$.next(answer.data);
                } else {
                    this._popover.hidePreloader({
                        success: false,
                        message: answer.reason,
                    }).then();
                }
            }
        });
    }

    public clearCurrentImage(): void {
        this._image$$.next(null);
    }

    public copyToClipboard(data: string): void {
        Clipboard.write({
            string: `${data}\nСкопировано из официального приложения ЦДС`,
        }).then(() => {
            this._popover.showToast('Скопировано в буфер обмена', true).then();
        });
    }
}

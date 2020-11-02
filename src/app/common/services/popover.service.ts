import {LoadingController, AlertController, ToastController} from '@ionic/angular';
import {Injectable} from '@angular/core';
import {PopoverResponseInterface} from '../interfaces/popover-responce.interface';

@Injectable()
export class PopoverService {
    // tslint:disable:variable-name
    private _preloader;
    private _alert;
    private _toast;

    constructor(
        private _loadingController: LoadingController,
        private _alertController: AlertController,
        private _toastController: ToastController,
    )
    {
        this._createPreloader().then();
    }

    private async _createPreloader() {
        this._preloader = await this._loadingController.create({
            message: 'Загрузка...',
            animated: true,
        });
    }

    private async _createAlert(message: string) {
        this._alert = await this._alertController.create({
            header: 'Ошибка',
            message,
            buttons: ['OK']
        });
    }

    private async _createToast(message: string, success: boolean) {
        this._toast = await this._toastController.create({
            message,
            duration: 2000,
            position: 'top',
            color: success ? 'primary' : 'danger',
        });
    }

    public async showPreloader() {
        await this._preloader.present();
    }

    public async hidePreloader(response: PopoverResponseInterface) {
        await this._preloader.dismiss();
        if (response.message) {
            await this.showToast(response.message, response.success);
        }
        this._createPreloader().then();
    }

    public async showAlert(message: string) {
        this._createAlert(message).then(() => {
            this._alert.present();
        });
    }

    public async showToast(message: string, success: boolean) {
        this._createToast(message, success).then(() => {
            this._toast.present();
        });
    }


}

import {LoadingController, AlertController} from '@ionic/angular';
import {Injectable} from '@angular/core';

@Injectable()
export class PopoverService {
    // tslint:disable:variable-name
    private _preloader;
    private _alert;

    constructor(
        private _loadingController: LoadingController,
        private _alertController: AlertController,
    )
    {
        this.createPreloader().then();
        this.createAlert().then();
    }

    private async createPreloader() {
        this._preloader = await this._loadingController.create({
            message: 'Загрузка...',
            animated: true,
        });
    }

    private async createAlert() {
        this._alert = await this._alertController.create({
            header: 'Ошибка',
            // subHeader: 'Subtitle',
            message: 'Нет соединения с сервером',
            buttons: ['OK']
        });
    }

    public async showPreloader() {
        await this._preloader.present();
    }

    public async hidePreloader(success: boolean) {
        await this._preloader.dismiss();
        if (!success) {
            this.showAlert().then();
        }
        this.createPreloader().then();
    }

    public async showAlert() {
        await this._alert.present();
        this.createAlert().then();
    }


}

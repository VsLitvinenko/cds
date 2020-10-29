import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {ApiResponse} from './api-responce.interface';
import {LoadingController} from '@ionic/angular';

@Injectable()
export class ApiService {

    public environment = environment.host;
    private _preloader;

    constructor(
        private http: HttpClient,
        private loadingController: LoadingController,
    ) {
        this.createApiPreloader().then();
    }

    public get<T>(url: string, head: any = {}): Promise<any> {
        this.showApiPreloader();
        return this.http.get<ApiResponse<any>>(`${this.environment}${url}`, head)
            .toPromise()
            .catch(() => {
            this.hideApiPreloader(false);
        });
    }

    public post<T>(url: string, body: any, head: any = {}): Promise<any> {
        return this.http.post<ApiResponse<any>>(`${this.environment}${url}`, body, head).toPromise();
    }

    public delete<T>(url: string, head: any = {}): Promise<any> {
        return this.http.delete<ApiResponse<any>>(`${this.environment}${url}`, head).toPromise();
    }

    public put<T>(url: string, body: any): Promise<any> {
        return this.http.put<ApiResponse<any>>(`${this.environment}${url}`, body).toPromise();
    }

    private async createApiPreloader() {
        debugger
        this._preloader = await this.loadingController.create({
            message: 'pls w8...',
        });
        debugger
    }

    public async showApiPreloader() {
        debugger
        await this._preloader.present();
    }

    public async hideApiPreloader(success: boolean) {
        debugger
        await this._preloader.dismiss();
    }
}

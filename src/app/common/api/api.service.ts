import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {ApiResponse} from './api-responce.interface';
import {PopoverService} from './popover.service';

@Injectable()
export class ApiService {

    public environment = environment.host;

    constructor(
        private http: HttpClient,
        private popover: PopoverService,
    ) { }

    public get<T>(url: string, head: any = {}): Promise<any> {
        this.popover.showPreloader().then();
        return this.http.get<ApiResponse<any>>(`${this.environment}${url}`, head)
            .toPromise()
            .catch(() => {
            this.popover.hidePreloader(false).then();
        });
    }

    public post<T>(url: string, body: any, head: any = {}): Promise<any> {
        this.popover.showPreloader().then();
        return this.http.post<ApiResponse<any>>(`${this.environment}${url}`, body, head)
            .toPromise()
            .catch(() => {
                this.popover.hidePreloader(false).then();
            });
    }

    public delete<T>(url: string, head: any = {}): Promise<any> {
        this.popover.showPreloader().then();
        return this.http.delete<ApiResponse<any>>(`${this.environment}${url}`, head)
            .toPromise()
            .catch(() => {
                this.popover.hidePreloader(false).then();
            });
    }

    public put<T>(url: string, body: any): Promise<any> {
        this.popover.showPreloader().then();
        return this.http.put<ApiResponse<any>>(`${this.environment}${url}`, body)
            .toPromise()
            .catch(() => {
                this.popover.hidePreloader(false).then();
            });
    }
}

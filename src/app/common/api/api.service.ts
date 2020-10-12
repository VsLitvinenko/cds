import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {ApiResponse} from './api-responce.interface';

@Injectable()
export class ApiService {

    public environment = environment.host;

    constructor(
        private http: HttpClient,
    ) {
    }

    public get<T>(url: string, head: any = {}): Promise<any> {
        return this.http.get<ApiResponse<any>>(`${this.environment}${url}`, head).toPromise();
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
}

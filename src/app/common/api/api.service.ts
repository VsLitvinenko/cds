import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError, finalize, map} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {Observable} from 'rxjs';
import {CisHttpParams, LOCATION} from './api.config';
import { ApiResponse } from './api-responce.interface';


@Injectable()
export class ApiService {

    public constructor(
        private http: HttpClient,
        // private preloader: PreloaderService
    ) {
    }

    /**
     * GET запрос
     * Перехватывает ошибки
     * Включает прелоадер (если есть флаг)
     */
    public get<T>(
        params: CisHttpParams,
        usePreloader: boolean = true,
        additionalParams?: CisHttpParams
    ): Observable<ApiResponse<T> | any> {
        if (usePreloader) {
            // this.preloader.show();
        }

        return this.http.get(LOCATION, {params, ...additionalParams})
            .pipe(
                this._catchAndReturnErrorReason.bind(this),
                finalize<ApiResponse<T> | any>(() => {
                    if (usePreloader) {
                        // this.preloader.hide();
                    }
                })
            );
    }

    /**
     * Модификация GET запроса
     * Извлечение поля результата
     */
    public getResult<T>(
        params: CisHttpParams,
        usePreloader: boolean = true,
        additionalParams?: CisHttpParams
    ): Observable<T> | any {
        return this.get(params, true, additionalParams)
            .pipe(
                map((r: ApiResponse<T>) => r.rows)
            );
    }

    /**
     * Модификация GET запроса
     * Преобразование в Promise
     */
    public getPromise<T>(
        params: CisHttpParams,
        usePreloader: boolean = true,
        additionalParams?: CisHttpParams
    ): Promise<ApiResponse<T> | any> {
        return this.get<T>(params, true, additionalParams)
            .toPromise()
            .catch(this._catchAndReturnNullSync.bind(this));
    }

    /**
     * POST запрос
     * Перехватывает ошибки
     * Включает прелоадер (если есть флаг)
     */
    public post<T>(
        body: any,
        params: CisHttpParams,
        usePreloader: boolean = true,
        additionalParams?: CisHttpParams
    ): Observable<ApiResponse<T> | any> {
        if (usePreloader) {
            // this.preloader.show();
        }

        return this.http.post(LOCATION, body, {params, ...additionalParams}).pipe(
            this._catchAndReturnErrorReason.bind(this),
            finalize<ApiResponse<T> | any>(() => {
                if (usePreloader) {
                    // this.preloader.hide();
                }
            })
        );
    }

    /**
     * Модификация POST запроса
     * Преобразование в Promise
     */
    public postPromise<T>(
        body: any,
        params: CisHttpParams,
        usePreloader: boolean = true,
        additionalParams?: CisHttpParams
    ): Promise<ApiResponse<T> | any> {
        return this.post<T>(body, params, true, additionalParams)
            .toPromise()
            .catch(this._catchAndReturnNullSync.bind(this));
    }

    /**
     * PUT запрос
     * Перехватывает ошибки
     * Включает прелоадер (если есть флаг)
     */
    public put<T>(
        body: any,
        params: CisHttpParams,
        usePreloader: boolean = true,
        additionalParams?: CisHttpParams
    ): Observable<ApiResponse<T>> {
        if (usePreloader) {
            // this.preloader.show();
        }

        return this.http.put(LOCATION, body, {params, ...additionalParams})
            .pipe(
                this._catchAndReturnErrorReason.bind(this),
                finalize<ApiResponse<T> | any>(() => {
                    if (usePreloader) {
                        // this.preloader.hide();
                    }
                })
            );
    }

    /**
     * Модификация PUT запроса
     * Преобразование в Promise
     */
    public putPromise<T>(
        body: any,
        params: CisHttpParams,
        usePreloader: boolean = true,
        additionalParams?: CisHttpParams
    ): Promise<ApiResponse<T>> {
        return this.put<T>(body, params, true, additionalParams)
            .toPromise()
            .catch((this._catchAndReturnNullSync.bind(this)));
    }

    /**
     * DELETE запрос
     * Перехватывает ошибки
     * Включает прелоадер (если есть флаг)
     */
    public delete<T>(
        params: CisHttpParams,
        usePreloader: boolean = true,
        additionalParams?: CisHttpParams
    ): Observable<ApiResponse<T>> {
        if (usePreloader) {
            // this.preloader.show();
        }

        return this.http.delete(LOCATION, {params, ...additionalParams})
            .pipe(
                this._catchAndReturnErrorReason.bind(this),
                finalize<ApiResponse<T>>(() => {
                    if (usePreloader) {
                        // this.preloader.hide();
                    }
                })
            );
    }

    /**
     * Модификация DELETE запроса
     * Преобразование в Promise
     */
    public deletePromise<T>(
        params: CisHttpParams,
        usePreloader: boolean = true,
        additionalParams?: CisHttpParams
    ): Promise<ApiResponse<T>> {
        return this.delete<T>(params, true, additionalParams)
            .toPromise()
            .catch(this._catchAndReturnNullSync.bind(this));
    }

    /**
     * Перехватывает ошибку, возвращает ошибку с текстом сообщения
     */
    private _catchAndReturnErrorReason<T>(source: Observable<ApiResponse<T>>): Observable<any> {
        return source.pipe(
            catchError((response: HttpErrorResponse) => {
                if (response.error.hasOwnProperty('reason')) {
                    console.log(response.error.reason, 'error');
                }
                return throwError(response.message);
            })
        );
    }

    private _catchAndReturnNullSync(): any {
        return {result: null};
    }
}

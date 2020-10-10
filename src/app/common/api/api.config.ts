import { HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const LOCATION = `${environment.host}/api/api.php`;
export type CisHttpParams = HttpParams | {
    [param: string]: string | string[] | any;
};
export const SHARED_API_HOST = `https://cis.gubkin.ru:84/no_rgu_connect/shared-api/api/api.php`;

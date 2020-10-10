import { HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const LOCATION = `${environment.host}/api/api.php`;
export type CisHttpParams = HttpParams | {
    [param: string]: string | string[] | any;
};

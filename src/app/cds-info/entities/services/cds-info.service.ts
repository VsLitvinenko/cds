import { Injectable } from '@angular/core';
import {ApiService} from '../../../common/services/api.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {TodayEventsInterface} from '../interfaces/today-events.interface';
import {ApiResponse} from '../../../common/interfaces/api-response.interface';

@Injectable({
  providedIn: 'root'
})
export class CdsInfoService {
  // tslint:disable:variable-name
  private _tEvents$$: BehaviorSubject<TodayEventsInterface> = new BehaviorSubject(null);
  public tEvents$: Observable<TodayEventsInterface> = this._tEvents$$ as Observable<TodayEventsInterface>;

  constructor(private _api: ApiService) { }

  public getTEvents(): void {
    this._api.get('LoadTodayEvents', false).then( (answer: ApiResponse<any>) => {
      if (answer?.success) {
        this._tEvents$$.next(answer.data);
      }
    });
  }
}

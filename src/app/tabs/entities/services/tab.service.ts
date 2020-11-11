import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class TabService {
    // tslint:disable-next-line:variable-name
    private _currentTab$$: BehaviorSubject<string> = new BehaviorSubject(null);
    public currentTab$: Observable<string> = this._currentTab$$ as Observable<string>;

    constructor() {
    }
    public changeCurrentTab(newTab: string = ''): void {
        this._currentTab$$.next(newTab);
    }
}

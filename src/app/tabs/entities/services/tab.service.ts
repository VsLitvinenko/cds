import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class TabService {
    // tslint:disable:variable-name
    private _currentTab$$: BehaviorSubject<string> = new BehaviorSubject(null);
    public currentTab$: Observable<string> = this._currentTab$$ as Observable<string>;

    private _nextTab$$: BehaviorSubject<string> = new BehaviorSubject(null);
    public nextTab$: Observable<string> = this._nextTab$$ as Observable<string>;

    constructor() { }
    // при непосредственном нажатии на tab
    public changeCurrentTabManually(action: string = ''): void {
        this._currentTab$$.next(action);
    }

    // в любой другой ситуации
    public changeCurrentTabAuto(tabId: string) {
        this._nextTab$$.next(tabId);
    }
}

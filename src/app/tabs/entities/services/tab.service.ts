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
    public changeCurrentTab(action: string = ''): void {
        this._currentTab$$.next(action);
    }

    // изменение ТАБА без нажатия
    public selectNewTab(tabId: string) {
        this._nextTab$$.next(tabId);
    }
}

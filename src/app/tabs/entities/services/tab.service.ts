import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class TabService {
    // tslint:disable:variable-name
    private _currentTab$$: BehaviorSubject<string[]> = new BehaviorSubject(null);
    public currentTab$: Observable<string[]> = this._currentTab$$ as Observable<string[]>;

    private _newTab$$: BehaviorSubject<string> = new BehaviorSubject(null);
    public newTab$: Observable<string> = this._newTab$$ as Observable<string>;

    constructor() {
    }
    public changeCurrentTab(action: string = '', tab: string = ''): void {
        this._currentTab$$.next([action, tab]);
    }

    public redirectUserToTab(tab: string): void {
        this._newTab$$.next(tab);
    }
}

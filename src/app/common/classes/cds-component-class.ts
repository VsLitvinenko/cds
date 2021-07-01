import {Component, OnDestroy} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
    template: ''
})
export abstract class CdsComponentClass implements OnDestroy {
    // tslint:disable-next-line:variable-name
    protected _destroy$$: Subject<void> = new Subject();

    public ngOnDestroy(): void {
        this._destroy$$.next();
        this._destroy$$.complete();
    }

    protected _observeSafe<T = any>(obs: Observable<T>): Observable<T> {
        return obs.pipe(takeUntil(this._destroy$$));
    }
}

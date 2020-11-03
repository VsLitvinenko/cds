import {Injectable} from '@angular/core';

@Injectable()
export class PreferColorSchemeService {
    // tslint:disable-next-line:variable-name
    protected _userPrefersDark: boolean;

    constructor() {
        if (window.matchMedia) {
            this._userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        else {
            this._userPrefersDark = false;
        }
        this._changeColorScheme();
    }

    private _isValueRight(): boolean {
        return this._userPrefersDark === document.body.classList.contains('dark');
    }

    private _changeColorScheme(): void {
        if (!this._isValueRight()) {
            document.body.classList.toggle('dark', this._userPrefersDark);
        }
    }

    public toggleColorScheme(): void {
        this._userPrefersDark = !this._userPrefersDark;
        this._changeColorScheme();
    }

    public isUserPrefersDark(): boolean {
        return this._userPrefersDark;
    }
}

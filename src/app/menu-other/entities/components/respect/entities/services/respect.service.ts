import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {CurrentDatePhotosInterface} from '../interfaces/current-date-photos.interface';

@Injectable()

export class RespectService {
    // tslint:disable:variable-name
    private _curDates$$: BehaviorSubject<CurrentDatePhotosInterface[]> = new BehaviorSubject(null);
    public curDates$: Observable<CurrentDatePhotosInterface[]> = this._curDates$$ as Observable<CurrentDatePhotosInterface[]>;

    constructor() { }

    public getCurrentDates(): void {
        this._curDates$$.next([
            {
                id: 1,
                date: '12 ноя 2020',
                images: [
                    {
                        id: null,
                        webViewPath: 'https://sun6-21.userapi.com/c831109/v831109249/1a9236/6FnzX59WjKw.jpg',
                    },
                    {
                        id: null,
                        webViewPath: 'https://sun9-19.userapi.com/c851428/v851428511/dcb7/LhfeUh9E2q8.jpg',
                    },
                    {
                        id: null,
                        webViewPath: 'https://sun9-29.userapi.com/c851428/v851428511/dcad/nzCHOSymubI.jpg',
                    },
                    {
                        id: null,
                        webViewPath: 'https://sun9-40.userapi.com/c851428/v851428511/dccb/RRBs7avCEw0.jpg',
                    },
                    {
                        id: null,
                        webViewPath: 'https://sun9-76.userapi.com/c845017/v845017302/f6a61/ZgBk9vvzdeI.jpg',
                    },
                ],
            },
            {
                id: 2,
                date: '10 дек 2020',
                images: [
                    {
                        id: null,
                        webViewPath: 'https://sun6-23.userapi.com/c849120/v849120906/79f06/WZ0pm2ftECw.jpg',
                    },
                    {
                        id: null,
                        webViewPath: 'https://sun9-15.userapi.com/c840620/v840620177/7dc68/4y7Btjmm_d0.jpg',
                    },
                ],
            },
            {
                id: 3,
                date: '1 янв 2021',
                images: [
                    {
                        id: null,
                        webViewPath: 'https://sun9-46.userapi.com/CII0cgPu-qhIvyP4msLqr4GQ75Yt2Kqw-EPUeA/JjqtJDjUcqo.jpg',
                    },
                    {
                        id: null,
                        webViewPath: 'https://sun9-47.userapi.com/Fb915HqOGLwVH-w0goBVcXRe1qPrSixbfAG-SQ/FREV55wI1sw.jpg',
                    },
                    {
                        id: null,
                        webViewPath: 'https://sun9-64.userapi.com/c858528/v858528272/127e7e/GqbZgYXlGxQ.jpg',
                    },
                ],
            },
        ]);
    }
}

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import * as ComicAtions from './comic.action';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class ComicEffects {
    constructor(
        private http: HttpClient,
        private actions$: Actions
    ) { }

    /*
    @Effect()
    GetTodos$: Observable<Action> = this.actions$.
        ofType<ComicAtions.GetComics>(ComicAtions.GET_COMICS)
            return new ComicAtions.GetComicsSuccess([]);
        })
        .catch(() => of(new ComicAtions.GetComicsError()))
*/
}
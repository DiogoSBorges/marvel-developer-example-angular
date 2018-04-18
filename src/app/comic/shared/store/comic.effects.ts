import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import * as ComicAtions from './comic.action';

import { HttpClient } from '@angular/common/http';
import { MarvelService } from './../../../marvel.service';

@Injectable()
export class ComicEffects {
    constructor(
        private actions$: Actions,
        private marvelService: MarvelService
    ) { }

    /*
    @Effect()
    GetComics$: Observable<Action> = this.actions$.
      ofType<ComicAtions.GetComics>(ComicAtions.GET_COMICS)
      .mergeMap(action =>
        this.marvelService.getComics()
          .map((data: Response) => {
  
            console.log(data);
            return new ComicAtions.GetTodosSuccess(data["data"]["docs"] as TodoState[]);
          })
          .catch(() => of(new TodoActions.GetTodoError()))
      );*/
}
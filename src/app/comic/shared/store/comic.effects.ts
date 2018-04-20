import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import { Effect, Actions } from "@ngrx/effects";
import { Action } from '@ngrx/store';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import * as ComicAtions from './comic.action';

import { HttpClient } from '@angular/common/http';
import { MarvelService } from './../../../shared/marvel.service';

@Injectable()
export class ComicEffects {
  constructor(
    private action$: Actions,
    private marvelService: MarvelService
  ) { }

  @Effect()
  getComics$: Observable<Action> = this.action$.
    ofType<ComicAtions.GetComics>(ComicAtions.GET_COMICS)
    .switchMap((param) => {
      return this.marvelService.getComics(param).map(response => {
        if (response.code == 200) {
          return new ComicAtions.GetComicsSuccess(response.data.results);
        } else {
          return new ComicAtions.GetComicsError();
        }
      })
    });
}
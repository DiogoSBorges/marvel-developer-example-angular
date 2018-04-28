import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

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
          return new ComicAtions.GetComicsSuccess({ listComics: response.data.results, totalItens: response.data.total });
        } else {
          return new ComicAtions.GetComicsError();
        }
      }).catch((err) => {
        return Observable.of(new ComicAtions.GetComicsError())
      })
    })
}
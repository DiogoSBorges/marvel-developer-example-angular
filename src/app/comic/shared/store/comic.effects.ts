import {Effect, Actions} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

import * as ComicAtions from './comic.action';

import { HttpClient } from '@angular/common/http';
import { MarvelService } from './../../../shared/marvel.service';

@Injectable()
export class ComicEffects {
  constructor(
    private actions$: Actions,
    private marvelService: MarvelService
  ) { }


  @Effect() update$ = this.actions$
    .ofType('SUPER_SIMPLE_EFFECT')
    .switchMap( () =>
      Observable.of({type: "SUPER_SIMPLE_EFFECT_HAS_FINISHED"})
    );

/*
  @Effect()
  getComics$: Observable<Action> = this.actions$.
    ofType(ComicAtions.GET_COMICS)
    .switchMap(action =>
      this.marvelService.getComics()
        .subscribe(response => {
          return new ComicAtions.GetComicsSuccess([]);
        })
    );

*/


/* .mergeMap(action =>
      this.marvelService.getComics()
      .subscribe(response => {


        console.log(response);
        return new ComicAtions.GetComicsSuccess([]);


      })
        //.catch(() => of(new ComicAtions.GetComicsError()))
    );*/
  }
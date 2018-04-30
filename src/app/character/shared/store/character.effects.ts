import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Effect, Actions } from "@ngrx/effects";
import { Action } from '@ngrx/store';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import * as CharacterActions from './character.action';

import { HttpClient } from '@angular/common/http';
import { MarvelService } from './../../../shared/marvel.service';

@Injectable()
export class CharacterEffects {
    constructor(
        private action$: Actions,
        private marvelService: MarvelService
    ) { }

    @Effect()
    getCharacters$: Observable<Action> = this.action$.
        ofType<CharacterActions.GetCharacters>(CharacterActions.GET_CHARACTERS)
        .switchMap((param) => {
            return this.marvelService.getCharacters(param).map(response => {
                if (response.code == 200) {
                    return new CharacterActions.GetCharacterssSuccess({ listCharacter: response.data.results, totalItens: response.data.total });
                } else {
                    return new CharacterActions.GetCharactersError();
                }
            }).catch((err) => {
                return Observable.of(new CharacterActions.GetCharactersError());
            })
        })
}
import { Component, OnInit } from '@angular/core';

import { ItemCharacterComponent } from './../item-character/item-character.component';

import { PaginationControlsComponent } from 'ngx-pagination';

import { Store } from '@ngrx/store';

import { CharacterState } from './../shared/store/character.state';

import * as CharacterAction from './../shared/store/character.action'

import { Observable } from "rxjs";

@Component({
    selector: 'list-character',
    templateUrl: './list-character.component.html',
    styleUrls: ['./list-character.component.css'],
    entryComponents: [ItemCharacterComponent]
})
export class ListCharacterComponent implements OnInit {
    characterState$: Observable<CharacterState>;
    name = "";
    page = 1;

    constructor(private store: Store<any>) { }

    ngOnInit() {
        this.characterState$ = this.store.select(state => state.characterState);

        this.getCharacters({});
    }

    getCharacters(params: any) {
        this.store.dispatch({
            type: CharacterAction.GET_CHARACTERS,
            ...params
        })
    }

    searchCharacters() {
        if (this.name) {
            this.page = 1;
            this.getCharacters({ name: this.name })
        } else {
            alert('Preencha o Campo');
        }
    }

    reloadList() {
        this.name = "";
        this.page = 1;
        this.getCharacters({});
    }

    pageChanged(event) {
        this.page = event;
        this.getCharacters({ page: event, name: this.name });
    }

}
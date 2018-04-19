import { Component, OnInit } from '@angular/core';

import { MarvelService } from '../../shared/marvel.service';

import { ItemComicComponent } from './../item-comic/item-comic.component';

import { Store } from '@ngrx/store';

import { ComicListState, ComicState } from './../shared/store/comic.state';

import * as ComicActions from './../shared/store/comic.action'

import { Observable } from "rxjs";


@Component({
    selector: 'list-comic',
    templateUrl: './list-comic.component.html',
    styleUrls: ['./list-comic.component.css'],
    entryComponents: [ItemComicComponent]
})
export class ListComicComponent implements OnInit {

    constructor(private store: Store<ComicListState>, private marvelService: MarvelService) { }


    comicListState$//: Observable<ComicState[]>;




    ngOnInit() {
        this.getComics({});
        this.comicListState$ = this.store.select(state => state.comics);

    }

    getComics(params: any) {

        this.store.dispatch({
            type: ComicActions.GET_COMICS
        })

        this.marvelService
            .getComics()
            .subscribe(response => {
                console.log(response);
                this.store.dispatch({
                    type: ComicActions.GET_COMICS_SUCCESS,
                    payload: response.data.results
                })
            })
    }

}
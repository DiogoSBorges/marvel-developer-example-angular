import { Component, OnInit } from '@angular/core';

import { ItemComicComponent } from './../item-comic/item-comic.component';

import { PaginationControlsComponent } from 'ngx-pagination';

import { Store } from '@ngrx/store';

import { ComicState } from './../shared/store/comic.state';

import * as ComicActions from './../shared/store/comic.action'

import { Observable } from "rxjs";


@Component({
    selector: 'list-comic',
    templateUrl: './list-comic.component.html',
    styleUrls: ['./list-comic.component.css'],
    entryComponents: [ItemComicComponent]
})
export class ListComicComponent implements OnInit {

    comicListState$: Observable<ComicState>;
    title = "";
    page = 1;

    constructor(private store: Store<any>) { }

    ngOnInit() {
        this.getComics({});

        this.comicListState$ = this.store.select(state => state.comicsState);
        /*this.comicListState$.subscribe(res =>{
            console.log(res);
       })*/
    }

    searchComics() {
        if (this.title) {
            this.page = 1;
            this.getComics({ title: this.title })
        } else {
            alert('Preencha o Campo');
        }
    }

    reloadList() {
        this.title = "";
        this.page = 1;
        this.getComics({});
    }

    getComics(params: any) {
        this.store.dispatch({
            type: ComicActions.GET_COMICS,
            ...params
        })
    }

    pageChanged(event) {
        this.page = event;
        this.getComics({ page: event, title: this.title });
    }

}
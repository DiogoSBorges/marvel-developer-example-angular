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

    comicListState$//: Observable<ComicState[]>;
    title = "";

    constructor(private store: Store<any>, private marvelService: MarvelService) { }
    
    ngOnInit() {
        this.getComics({});

        this.comicListState$ = this.store.select(state => state.comicsState);
         /*this.comicListState$.subscribe(res =>{
             console.log(res);
        })*/
    }

    searchComics(title:string){
        if(title){
            this.getComics({title:title})
        }else{
            alert('Preencha o Campo')
            return;
        }
        
    }

    reloadList(){
        this.getComics({});
    }

    getComics(params: any) {
        this.store.dispatch({
            type: ComicActions.GET_COMICS,
            ...params
        })
    }

}
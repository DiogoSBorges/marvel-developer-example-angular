import { NgModule } from '@angular/core';


//Components
import { ComicRoutingModule } from './comic.routing.module';
import { ListComicComponent } from './list-comic/list-comic.component';
import { ItemComicComponent } from './item-comic/item-comic.component';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MarvelService } from './../shared/marvel.service';

import { StoreModule } from '@ngrx/store'

import { CommonModule } from '@angular/common';

import * as ComicReducer from './shared/store/comic.reducer';

@NgModule({
    imports: [
        ComicRoutingModule,
        CommonModule,
        StoreModule.forRoot({comicsState: ComicReducer.ComicReducer})
    ],
    declarations: [
        ListComicComponent,
        ItemComicComponent
    ],
    providers: [MarvelService]
})
export class ComicModule { }
import { NgModule } from '@angular/core';


//Components
import { ComicRoutingModule } from './comic.routing.module';
import { ListComicComponent } from './list-comic/list-comic.component';
import { ItemComicComponent } from './item-comic/item-comic.component';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import {MarvelService} from './../marvel.service';

import { CommonModule } from '@angular/common';  

@NgModule({
    imports: [
        ComicRoutingModule,
        CommonModule
    ],
    declarations: [
        ListComicComponent,
        ItemComicComponent
    ],
    providers:[MarvelService, HttpClient]
})
export class ComicModule { }
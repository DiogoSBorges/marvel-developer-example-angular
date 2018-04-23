import { NgModule } from '@angular/core';


//Components
import { ComicRoutingModule } from './comic.routing.module';
import { ListComicComponent } from './list-comic/list-comic.component';
import { ItemComicComponent } from './item-comic/item-comic.component';

import { HttpClient, HttpHeaders } from '@angular/common/http';

//Service
import { MarvelService } from './../shared/marvel.service';

//NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import * as ComicReducer from './shared/store/comic.reducer';

import { ComicEffects } from './shared/store/comic.effects';

@NgModule({
    imports: [
        ComicRoutingModule,
        CommonModule,
        FormsModule,
        StoreModule.forRoot({ comicsState: ComicReducer.ComicReducer }),
        EffectsModule.forRoot([ComicEffects])
    ],
    declarations: [
        ListComicComponent,
        ItemComicComponent
    ],
    providers: [MarvelService]
})
export class ComicModule { }
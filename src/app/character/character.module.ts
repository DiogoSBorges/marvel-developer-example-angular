import { NgModule } from '@angular/core';


//Components
import { CharacterRoutingModule } from './character.routing.module';
import { ListCharacterComponent } from './list-character/list-character.component';
import { ItemCharacterComponent } from './item-character/item-character.component';

import { HttpClient, HttpHeaders } from '@angular/common/http';

//Service
import { MarvelService } from './../shared/marvel.service';

//NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {NgxPaginationModule} from 'ngx-pagination';

import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

//import * as ComicReducer from './shared/store/comic.reducer';

//import { ComicEffects } from './shared/store/comic.effects';

@NgModule({
    imports: [
        CharacterRoutingModule,
        CommonModule,
        NgxPaginationModule,
        FormsModule,
        //StoreModule.forRoot({ comicsState: ComicReducer.ComicReducer }),
        //EffectsModule.forRoot([ComicEffects])
    ],
    declarations: [
        ListCharacterComponent,
        ItemCharacterComponent
    ],
    providers: [MarvelService]
})
export class CharacterModule { }
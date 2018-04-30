import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCharacterComponent } from './list-character/list-character.component';

import { MarvelService } from './../shared/marvel.service';

const routes: Routes = [
    {
        path: '',
        component: ListCharacterComponent
    }

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [MarvelService]
})

export class CharacterRoutingModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComicComponent } from './list-comic/list-comic.component';
import { MarvelService } from './../shared/marvel.service';

const routes: Routes = [
    {
        path: '',
        component: ListComicComponent
    }

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [MarvelService]
})

export class ComicRoutingModule { }
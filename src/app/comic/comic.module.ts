import { NgModule } from '@angular/core';


//Components
import { ComicRoutingModule } from './comic.routing.module';
import { ListComicComponent } from './list-comic/list-comic.component';

@NgModule({
    imports: [
        ComicRoutingModule
    ],
    declarations: [
        ListComicComponent
    ]
})
export class ComicModule { }
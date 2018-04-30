import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, PreloadingStrategy } from '@angular/router';


const routes: Routes = [
    {
        path: '', redirectTo: '/comic',
        pathMatch: 'full'
    },
    {
        path: 'comic', loadChildren: 'app/comic/comic.module#ComicModule'
    },
    {
        path: 'character', loadChildren: 'app/character/character.module#CharacterModule'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})

export class AppRouting { }
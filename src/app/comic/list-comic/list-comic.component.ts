import { Component, OnInit } from '@angular/core';

import { MarvelService } from './../../marvel.service';

@Component({
    selector: 'list-comic',
    templateUrl: './list-comic.component.html',
    styleUrls: ['./list-comic.component.css'],
})

export class ListComicComponent implements OnInit {
    teste = 'Teste 1 2 3';
    isLoading = false;
    listComic = [];

    constructor(private marvelService: MarvelService) {

    }
    ngOnInit() {
        this.isLoading = true;
        this.marvelService
            .getComics()
            .subscribe(response => {
                console.log(response);
                this.listComic = response.data.results
                this.isLoading = false;
            });

        // .catch(err => console.error(err))
    }

}
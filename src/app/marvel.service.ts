import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import {Md5} from 'ts-md5'

import Comic from './comic/shared/models/comic.model';

const httpOption = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
}

//Api Config
const ENDPOINT = "http://gateway.marvel.com";

const PRIVATE_KEY = "75d5c6ea8251ea00d75a3c77dfc0617aa111bf95"
const PUBLIC_KEY = "253bed508bd2110c74786c4843f809e8"

const HASH = Md5.hashStr(`1${PRIVATE_KEY}${PUBLIC_KEY}`);

@Injectable()
export class MarvelService {

    constructor(private http: HttpClient) { }

    public getComics(optionsOrigin = {}): Observable<Comic[]> {
        const defaultOptions = { page: 1, limit: 20, title: null, characters: null }
        const options = Object.assign(defaultOptions, optionsOrigin);

        const offset = options.page == 1 ? 0 : (options.page - 1) * options.limit;

        let url = `${ENDPOINT}/v1/public/comics?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}&limit=${options.limit}&offset=${offset}`;

        if (options.title) {
            url = url.concat(`&titleStartsWith=${options.title}`)
        }

        if (options.characters) {
            url = url.concat(`&characters=${options.characters}`)
        }

        this.http.get(url);

        return null ;
        //return null;
    }

}
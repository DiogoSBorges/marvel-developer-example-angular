import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import Comic from './comic/shared/models/comic.model';

const httpOption = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
}

@Injectable()
export class MarverService {

    constructor(private http: HttpClient) { }

    getComics(): Observable<Comic[]> {
        return null;
    } 

}
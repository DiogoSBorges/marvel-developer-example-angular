import { ComicState } from './comic.state';
import Comic from './../models/comic.model';

import { Action } from '@ngrx/store';

export const GET_COMIC = '[Comic] GET_COMIC';
export const GET_COMIC_SUCCESS = '[Comic] GET_COMIC_SUCCESS';
export const GET_COMIC_ERROR = '[Comic] GET_COMIC_ERROR';

export const GET_COMICS = '[Comic] GET_COMICS';
export const GET_COMICS_SUCCESS = '[Comic] GET_COMICS_SUCCESS';
export const GET_COMICS_ERROR = '[Comic] GET_COMICS_ERROR';


export class GetComics implements Action {
    readonly type = GET_COMICS;
}

export class GetComicsSuccess implements Action {
    readonly type = GET_COMICS_SUCCESS;

    constructor(public payload: any) { };
}

export class GetComicsError implements Action {
    readonly type = GET_COMICS_ERROR;
}

export type All = GetComics | GetComicsSuccess | GetComicsError
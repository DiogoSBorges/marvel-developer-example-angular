import Comic from './../models/comic.model';
import { initializeComicState, ComicListState, ComicState } from './comic.state';

import * as ComicActions from './comic.action';

export type Action = ComicActions.All;

/*
const defaultComicState: ComicState[] = [
    {
        ...Comic.generateMockComic(),
        ...initializeComicState(),
    }

]
*/

const defaultState: ComicListState = {
    comics: [],
    loading: false,
    error:false,
    pending: 0
}

export function ComicReducer(state = defaultState, action: Action) {

    switch (action.type) {

        case ComicActions.GET_COMICS: {
            return {
                ...state,
                loaded: false,
                loading: true
            }
        }

        case ComicActions.GET_COMICS_SUCCESS: {
            return {
                ...state,
                comics:[
                    ...action.payload
                ],
                loading:false,
                error:false
            }
        }

        case ComicActions.GET_COMICS_ERROR: {
            return {
                ...state,
                error:true,
                loading:false
            }
        }

    }
}
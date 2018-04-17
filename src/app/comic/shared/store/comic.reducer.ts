import Comic from './../models/comic.model';
import { initializeComicState, ComicListState, ComicState } from './comic.state';

import * as ComicActions from './comic.action';

export type Action = ComicActions.All;

const defaultComicState: ComicState[] = [
    {
        ...Comic.generateMockComic(),
        ...initializeComicState(),
    }

]

const defaultState: ComicListState = {
    comics: defaultComicState,
    loading: false,
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
                    ...action.payload,
                    defaultComicState[0]
                ],
                loading:false
            }
        }

    }
}
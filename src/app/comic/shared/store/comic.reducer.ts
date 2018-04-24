import Comic from './../models/comic.model';
import { ComicState, initialize } from './comic.state';

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

const defaultState: ComicState = {
    ...initialize()
}

export function ComicReducer(state = defaultState, action: Action) {

    switch (action.type) {

        case ComicActions.GET_COMICS: {
            
            return {
                ...state,
                listComic: {
                    loading: true
                }
            }
        }

        case ComicActions.GET_COMICS_SUCCESS: {
            return {
                ...state,
                listComic: {
                    comics: [
                        ...action.payload
                    ],
                    loading: false,
                    error: false
                }
            }
        }

        case ComicActions.GET_COMICS_ERROR: {
            return {
                ...state,
                listComic: {
                    error: true,
                    loading: false
                }
            }
        }

    }
}
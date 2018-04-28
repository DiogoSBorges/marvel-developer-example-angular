import Comic from './../models/comic.model';

export class ComicState {
    listComic: {
        loading: boolean,
        error: boolean,
        comics: any[],
        totalItens: number
    }
    detailComic: {
        loading: boolean,
        error: boolean,
        comic: any
    }
}

export const initialize = () => {
    return {
        listComic: {
            loading: false,
            error: false,
            comics: [],
            totalItens: 0
        },
        detailComic: {
            loading: false,
            error: false,
            comic: null
        }
    }
}

/*
export const initializeComicState = () => {
    return {
        loading: false,

        editable: true,
        edited: false,
        editing: false,

        selected: false,
        refreshing: false,

        create: true,

        error: false,
    }
}

export interface ComicListState {
    comics: ComicState[];
    loading: boolean;
    error: boolean;
    pending: number;
}

export const intializeComicListState = function () {
    return {
        loading: false,
        pending: 0,
    }
}
*/
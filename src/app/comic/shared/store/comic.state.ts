import  Comic  from './../models/comic.model';

export class ComicState extends Comic {
    loading: boolean;

    editable: boolean;
    edited: boolean;
    editing: boolean;

    selected: boolean;
    refreshing: boolean;

    create: boolean;

    error: boolean;
}

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

export interface ComicListState{
    comics: ComicState[];
    loading: boolean;
    pending: number;
}

export const  intializeComicListState = function(){
    return {
        loading: false,
        pending: 0,
    }
}
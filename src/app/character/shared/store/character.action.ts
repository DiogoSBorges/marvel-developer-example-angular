import { Action } from '@ngrx/store';

export const GET_CHARACTER = '[Character] GET_CHARACTER';
export const GET_CHARACTER_SUCCESS = '[Character] GET_CHARACTER_SUCCESS';
export const GET_CHARACTER_ERROR = '[Character] GET_CHARACTER_ERROR';

export const GET_CHARACTERS = '[Character] GET_CHARACTERS';
export const GET_CHARACTERS_SUCCESS = '[Character] GET_CHARACTERS_SUCCESS';
export const GET_CHARACTERS_ERROR = '[Character] GET_CHARACTERS_ERROR';

export class GetCharacters implements Action {
    readonly type = GET_CHARACTERS;
}

export class GetCharacterssSuccess implements Action {
    readonly type = GET_CHARACTERS_SUCCESS;

    constructor(public payload: any) { };
}

export class GetCharactersError implements Action {
    readonly type = GET_CHARACTERS_ERROR;
}

export type All = GetCharacters | GetCharacterssSuccess | GetCharactersError
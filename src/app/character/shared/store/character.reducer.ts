
import { CharacterState, initialize } from './character.state';

import * as CharacterActions from './character.action';

export type Action = CharacterActions.All;


const defaultState: CharacterState = {
    ...initialize()
}

export function CharacterReducer(state = defaultState, action: Action) {

    switch (action.type) {

        case CharacterActions.GET_CHARACTERS: {

            return {
                ...state,
                listCharacter: {
                    loading: true
                }
            }
        }

        case CharacterActions.GET_CHARACTERS_SUCCESS: {
            return {
                ...state,
                listCharacter: {
                    characters: [
                        ...action.payload.listCharacter
                    ],
                    totalItens: action.payload.totalItens,
                    loading: false,
                    error: false
                }
            }
        }

        case CharacterActions.GET_CHARACTERS_ERROR: {
            return {
                ...state,
                listCharacter: {
                    error: true,
                    loading: false,
                    totalItens: 0
                }
            }
        }

    }
}

export class CharacterState {
    listCharacter: {
        loading: boolean,
        error: boolean,
        characters: any[],
        totalItens: number
    }
    detailCharacter: {
        loading: boolean,
        error: boolean,
        character: any
    }
}

export const initialize = () => {
    return {
        listCharacter: {
            loading: false,
            error: false,
            characters: [],
            totalItens: 0
        },
        detailCharacter: {
            loading: false,
            error: false,
            character: null
        }
    }
}

export default class Comic {
    id: string;
    title: string;
    description: string;
    price: number;

    constructor() {
        this.title = "";
        this.description = "";
        this.price = 0;
    }

    static generateMockComic(): Comic {
        return {
            id: 'new',
            title: '',
            description: '',
            price: 1
        }
    }

}
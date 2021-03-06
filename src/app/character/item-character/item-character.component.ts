import { Component } from '@angular/core';

@Component({
    selector: 'item-character',
    templateUrl: './item-character.component.html',
    styleUrls: ['./item-character.component.css'],
    inputs: ['character']
    //outputs: ['myevent']
})
export class ItemCharacterComponent {

    public character;

    getUrlImage() {
        return this.character.thumbnail.path + "/portrait_fantastic." + this.character.thumbnail.extension
    }
}
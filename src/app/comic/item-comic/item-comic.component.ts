import { Component } from '@angular/core';

@Component({
    selector: 'item-comic',
    templateUrl: './item-comic.component.html',
    styleUrls: ['./item-comic.component.css'],
    inputs: ['comic']
    //outputs: ['myevent']
})
export class ItemComicComponent {

    public comic;

    //public myevent: EventEmitter = new EventEmitter();
    // public @Input() myname: String;
    // public @Output() myevent: EventEmitter = new EventEmitter();


    getUrlImage() {
        if(this.comic.thumbnail){
            if (this.comic.thumbnail.path.indexOf('image_not_available') != -1 && this.comic.images.length > 0) {
                for (let index in this.comic.images) {
                    if (this.comic.images[index].path.indexOf('image_not_available') != -1) {
                        return this.comic.images[index].path + "/portrait_fantastic." + this.comic.images[index].extension
                    }
                }
                return this.comic.thumbnail.path + "/portrait_fantastic." + this.comic.thumbnail.extension
            }
            return this.comic.thumbnail.path + "/portrait_fantastic." + this.comic.thumbnail.extension
        }
        return '';
    }

}
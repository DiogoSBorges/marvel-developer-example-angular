import {Component} from '@angular/core';

@Component({
    selector: 'item-comic',
    templateUrl: './item-comic.component.html',
    styleUrls: ['./item-comic.component.css'],
    inputs:['comic']
})
export class ItemComicComponent {

    public comic;

    //public myevent: EventEmitter = new EventEmitter();
    // public @Input() myname: String;
    // public @Output() myevent: EventEmitter = new EventEmitter();

}
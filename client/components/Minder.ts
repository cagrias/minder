/**
 * Created by ekinca on 04.02.2016.
 */
import {Component, View,EventEmitter, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

@Component({
    selector: 'minder'
})
@View({
    templateUrl: 'pagehtmls/minder.html',
    //styleUrls:['pagehtmls/minder.css'],
    directives: []
})
export class Minder implements OnInit {


    constructor(){
        console.log("Minder class");
    }

    ngOnInit(){
console.log('minder');
    }




}
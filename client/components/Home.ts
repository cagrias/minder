/**
 * Created by ekinca on 05.02.2016.
 */
import {Component, View,EventEmitter, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

@Component({
    selector: 'home'
})
@View({
    templateUrl: 'pagehtmls/home.html',
    directives: []
})
export class Home implements OnInit {


    constructor(){
        console.log("Home class");
    }

    ngOnInit(){
        console.log('home');
        // Store

        localStorage.setItem("lastname", "aman");
        console.log(localStorage.getItem("lastname"));

    }
}
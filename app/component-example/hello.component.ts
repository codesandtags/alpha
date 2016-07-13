import {Component, OnInit} from '@angular/core';
import {Dog} from "./dog";

@Component({
    moduleId: module.id,
    selector: 'hello-component',
    templateUrl: 'hello.component.html',
    styleUrls: ['hello.component.css']
})
export class HelloComponent implements OnInit {

    name = "Codes and Tags";
    dogs = [
        new Dog("Isis", 2, "White and Brown"),
        new Dog("Cristal", 11, "Gold"),
        new Dog("Manchas", 5, "Black")
    ];

    constructor() {
        console.log("This is my constructor");
    }

    static ngOnInit() {
        console.log("This is my init!");
    }
}
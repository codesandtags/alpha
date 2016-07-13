import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app/templates/main.html'
})
export class AppComponent {
    student = {
        "name": "Edwin Torres",
        "age": 27,
        "favoriteColor": "red"
    }

    static myClick() {
        alert("Me diste click :D");
    }

    static myBlur() {
        console.log("Saliste!");
    }
}

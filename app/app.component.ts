import {Component} from '@angular/core';

@Component({
    selector:'my-app',
    template: `<h1>This is Sparta!</h1>
             <div>
                <p>Welcome to the parche <b>{{student.name}}</b></p>
                <p>You are <b>{{student.age}}</b> years old</p>
                <p>And your favorite color is <b [style.color]="student.favoriteColor">{{student.favoriteColor}}</b></p>
             </div>
             <div>
                This is the whole object {{student | json}}
</div>
             `
})
export class AppComponent{
    student = {
        "name": "Edwin Torres",
        "age": 27,
        "favoriteColor": "red"
    }
}

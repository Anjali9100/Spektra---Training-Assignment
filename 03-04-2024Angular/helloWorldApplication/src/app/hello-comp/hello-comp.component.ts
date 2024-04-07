import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-comp',
  templateUrl: './hello-comp.component.html',
  styleUrls: ['./hello-comp.component.css']
})
export class HelloCompComponent {
  result = [
    { id: 1, name: "Anjali", age: 40 },
    { id: 2, name: "Arpita", age: 20 },
    { id: 3, name: "Manisha", age: 30 },
    { id: 4, name: "Abc", age: 25 }
  ];
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-data-display-in-table',
  templateUrl: './data-display-in-table.component.html',
  styleUrl: './data-display-in-table.component.css'
})
export class DataDisplayInTableComponent {
  result = [
    { id: 1, name: "Anjali", age: 40, phone:786954123 },
    { id: 2, name: "Arpita", age: 20, phone:786954123 },
    { id: 3, name: "Manisha", age: 30, phone:786954123 },
    { id: 4, name: "Abc", age: 25, phone:786954123 }
  ];
}

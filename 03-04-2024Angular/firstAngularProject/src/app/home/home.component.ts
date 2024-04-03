import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name: string = '';
  isDisabled: boolean = true;

  upBtnState(event: any): void {
    this.name = event.target.value;
    this.isDisabled = this.name.trim().length === 0;
  }

}

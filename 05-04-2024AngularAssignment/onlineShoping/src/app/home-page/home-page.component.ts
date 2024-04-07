import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor(private router:Router){}
  viewDescription(productId: number, event: Event) {
    event.preventDefault(); // Prevent the default anchor tag behavior
    this.router.navigate(['product-description', productId]);
  }
}

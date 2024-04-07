import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-display-form-data',
  templateUrl: './display-form-data.component.html',
  styleUrls: ['./display-form-data.component.css']
})
export class DisplayFormDataComponent implements OnInit {
  data: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // Accessing the state data through the ActivatedRoute
    const currentRouterState = this.router.getCurrentNavigation();
    if (currentRouterState) {
      // If the navigation is current, access the state directly
      this.data = currentRouterState.extras.state?.['data'];
    } else {
      // For state after navigation completion, access via ActivatedRoute
      this.activatedRoute.paramMap.subscribe(params => {
        // If you're passing data via URL parameters, access them here
      });
      
      // Accessing the router state snapshot if navigation has completed
      this.data = this.router.getCurrentNavigation()?.extras.state?.['data'] || 
                  history.state['data']; // Fallback to history state
    }
    
    if (this.data) {
      console.log(this.data);
    } else {
      console.log('No data available');
    }
  }
}

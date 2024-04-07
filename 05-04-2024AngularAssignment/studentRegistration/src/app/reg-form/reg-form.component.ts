import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrl: './reg-form.component.css' 
})
export class RegFormComponent {
  constructor(private router:Router){}
  saveData(formData:any){
    if(formData.valid){
      console.log(formData.value);
      this.router.navigate(['user-details'], { 
        state: { data: formData.value } 
      });
    }
  }
}

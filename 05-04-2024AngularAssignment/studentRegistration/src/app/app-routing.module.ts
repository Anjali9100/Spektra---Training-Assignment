import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegFormComponent } from './reg-form/reg-form.component';
import { DisplayFormDataComponent } from './display-form-data/display-form-data.component';

const routes: Routes = [
  {path:"",component:RegFormComponent},
  {path:"user-details", component:DisplayFormDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

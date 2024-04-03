import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InterpolationDataBindingComponent } from './interpolation-data-binding/interpolation-data-binding.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"dataBinding", component:InterpolationDataBindingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

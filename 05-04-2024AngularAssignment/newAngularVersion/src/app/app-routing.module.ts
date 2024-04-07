import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataDisplayInTableComponent } from './data-display-in-table/data-display-in-table.component';
import { RadioBtnDataDisplayComponent } from './radio-btn-data-display/radio-btn-data-display.component';
import { SelectElementDataDisplayComponent } from './select-element-data-display/select-element-data-display.component';

const routes: Routes = [
  {path:"", component:DataDisplayInTableComponent},
  {path:"radio", component:RadioBtnDataDisplayComponent},
  {path:"select", component:SelectElementDataDisplayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

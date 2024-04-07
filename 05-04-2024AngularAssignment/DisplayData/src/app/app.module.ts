import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataDisplayInTableComponent } from './data-display-in-table/data-display-in-table.component';
import { RadioBtnDataDisplayComponent } from './radio-btn-data-display/radio-btn-data-display.component';
import { FormsModule } from '@angular/forms';
import { SelectElementDataDisplayComponent } from './select-element-data-display/select-element-data-display.component';

@NgModule({
  declarations: [
    AppComponent,
    DataDisplayInTableComponent,
    RadioBtnDataDisplayComponent,
    SelectElementDataDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

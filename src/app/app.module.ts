import { NgModule } from '@angular/core';
import { HostBinding } from '@angular/core';


import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SimpleGreetingFormComponent } from './simple-greeting-form/simple-greeting-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleGreetingFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

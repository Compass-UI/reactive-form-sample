import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlightSearchService } from './flight-search.service';
import { FormTemplateComponent } from './form-template/form-template.component';
import { InputComponent } from './input/input.component';


@NgModule({
  declarations: [
    AppComponent,
    FormTemplateComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    FlightSearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

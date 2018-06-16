import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlightSearchService } from './flight-search.service';
import { FormTemplateComponent } from './form-template/form-template.component';
import { InputComponent } from './input/input.component';
import { NotFound404Component } from './not-found-404/not-found-404.component';
import { RoutesModule } from './routes/routes.module';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    AppComponent,
    FormTemplateComponent,
    InputComponent,
    NotFound404Component,
    FormReactiveComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],

  exports: [
    RoutesModule
  ],
  providers: [
    FlightSearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

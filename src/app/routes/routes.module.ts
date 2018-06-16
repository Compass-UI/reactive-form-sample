import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
// import { FormTemplateComponent } from '../form-template/form-template.component';
import { AppComponent } from '../app.component';
import { NotFound404Component } from '../not-found-404/not-found-404.component';

export const appRoutes: Routes = [
  // {path: 'templateform', component: FormTemplateComponent},
  {path: 'reactiveform', component: AppComponent},
  {path: 'home', component: AppComponent},
  {path: '**', component: NotFound404Component},

]

@NgModule({
  imports: [
    CommonModule,
    // FormTemplateComponent,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: []
})
export class RoutesModule { }

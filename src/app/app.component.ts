import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  searchForm;

  submit(form){
    console.log(form);
  }
  ngOnInit(){
    let fromCity = new FormControl();
    let toCity = new FormControl();
    this.searchForm = new FormGroup({
      fromCity: fromCity,
      toCity: toCity
    })
  }
}

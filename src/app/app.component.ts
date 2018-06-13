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
    console.log(`Flying from ${form.value.fromCity} to ${form.value.toCity}`);
  }
  ngOnInit(){
    let fromCity = new FormControl('ORD');
    let toCity = new FormControl('SFO');
    this.searchForm = new FormGroup({
      fromCity: fromCity,
      toCity: toCity
    })
  }
}

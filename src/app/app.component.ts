import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FlightSearchService } from './flight-search.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  searchForm;

  constructor(private flightSearchService: FlightSearchService){

  }

  submit(form){
    console.log(form);
    console.log(`Flying from ${form.value.fromCity} to ${form.value.toCity}`);
  }
  ngOnInit(){
    let fromCity = new FormControl(this.flightSearchService.flightSearch().flights[0].from);
    let toCity = new FormControl(this.flightSearchService.flightSearch().flights[0].to);
    this.searchForm = new FormGroup({
      fromCity: fromCity,
      toCity: toCity
    })
  }
}

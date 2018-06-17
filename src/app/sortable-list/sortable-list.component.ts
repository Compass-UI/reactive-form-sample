import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'ual-sortable-list',
  templateUrl: './sortable-list.component.html',
  styleUrls: ['./sortable-list.component.css']
})
// export class SortableListComponent implements OnInit, OnChanges{
export class SortableListComponent implements OnChanges{
  flightData: string = 'Flight Data';

  constructor() { }

  ngOnInit() {
  }
  changeData(){
    console.log('Data changed');
    this.flightData = 'Data Changed';
  }
  ngOnChanges(){
    console.log(this.flightData)
  }

}

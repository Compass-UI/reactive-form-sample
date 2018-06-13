import { Injectable } from '@angular/core';

@Injectable()
export class FlightSearchService {

  constructor() { }

  flightSearch(){
    return {
      flights: [
        {from: 'SFO', to: 'ORD', flight: 48, date: new Date()},
        {from: 'DXB', to: 'YYZ', flight: 97, date: new Date()},
        {from: 'WAS', to: 'ORD', flight: 132, date: new Date()},
      ]
    }
  }

}

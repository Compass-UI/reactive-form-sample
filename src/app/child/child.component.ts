import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ual-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input() flights;

  ngOnInit() {
  }

}

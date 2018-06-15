import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent implements OnInit {
  sine: string = '';
  agent: string = '';
  password: string = '';

  constructor() { }

  ngOnInit() {
    
  }
  login(form){

    console.log(form);
    console.log(`User: ${form.agent} Agent: ${form.agent} pass: ${form.password}`);
  }

}

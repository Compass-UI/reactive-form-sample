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
  street: string = '';
  city: string = '';
  state: string = '';
  country: string = '';
  imageUrl: string = 'https://images.pexels.com/photos/190589/pexels-photo-190589.jpeg?auto=compress&cs=tinysrgb&h=350';

  constructor() { }

  ngOnInit() {
    
  }
  login(form){

    // console.log(form);
    console.log(form.address);
    console.log(`User: ${form.agent} Agent: ${form.agent} pass: ${form.password}`);
  }

}

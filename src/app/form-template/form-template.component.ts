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
  imageUrl: string = '';

  data: any;

  constructor() { }

  ngOnInit() {
    this.data = {
      sine: 'sine',
      agent: 'agent',
      password: 'passx',
      street: '1 Yonge',
      city: 'Toronto',
      state: 'ON',
      country: 'Canada',
      imageUrl: 'https://images.pexels.com/photos/190589/pexels-photo-190589.jpeg?auto=compress&cs=tinysrgb&h=350'

    }
    
  }
  login(form){

    // console.log(form);
    console.log(form.address);
    console.log(`User: ${form.agent} Agent: ${form.agent} pass: ${form.password}`);
  }
  sampleData(){
    this.sine = this.data.sine;
    this.agent = this.data.agent;
    this.password = this.data.password;
    this.street = this.data.street;
    this.city = this.data.city;
    this.state = this.data.state;
    this.country = this.data.country;
    this.imageUrl= this.data.imageUrl;
  }

}

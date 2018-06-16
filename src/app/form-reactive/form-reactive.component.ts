import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'ual-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {

  // dataCollection = new FormGroup();
  constructor() { }

  ngOnInit() {

    // this.rWords = new FormControl({
    //   '', [Validators.required, 
    //     Validators.maxLength(40), 
    //     this.restrictedWords(['foo'])]
    // })

  }



  restrictedWords(control: FormControl): {[key: string]: any} {
    return control.value.includes('foo')
      ? {'restrictedWords': 'foo'}
      : null;
  }
}

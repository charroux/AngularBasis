import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators, FormsModule} from '@angular/forms';

import { Person } from './person';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {

  checkoutForm;
  persons: Person[]  = [];

  constructor(private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
          name: 'default value',
          age: '20',
          gender: 'female'
        });
  }

  ngOnInit() {
  }

  onSubmit(customerData) {
      // Process checkout data here
      console.warn('Your order has been submitted', customerData);
      this.persons.push(customerData);
      // this.checkoutForm.reset();
    }

}

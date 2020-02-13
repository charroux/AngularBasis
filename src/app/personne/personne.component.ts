import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators, FormsModule} from '@angular/forms';

import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {

  checkoutForm;
  persons: Person[]  = [];

  constructor(private formBuilder: FormBuilder, private personService: PersonService) {
    this.checkoutForm = this.formBuilder.group({
          name: 'default value',
          age: '20',
          gender: 'female'
        });
  }

  ngOnInit() {
  }

  onSubmitWithoutService(customerData) {
      // Process checkout data here
      console.warn('Your person has been submitted', customerData);
      this.persons.push(customerData);
      // this.checkoutForm.reset();
    }

  onSubmitWithService(customerData) {
      // Process checkout data here
      console.warn('Your person has been submitted via a service', customerData);
      this.personService.addPerson(customerData);
      // this.checkoutForm.reset();
    }
}

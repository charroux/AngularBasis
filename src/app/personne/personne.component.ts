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

  personForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    gender: new FormControl(''),
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.personForm.value);
    this.personService.addPerson(this.personForm.value);
  }

  constructor(private personService: PersonService) {
  }

  ngOnInit() {
  }

}

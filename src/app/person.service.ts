import { Injectable } from '@angular/core';

import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  persons: Person[]  = [];

  constructor() { }

  getPersons(): Promise<Person[]>{
    return Promise.resolve(this.persons);
  }

  addPerson(person): void {
    this.persons.push(person);
  }
}

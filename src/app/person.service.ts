import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  persons: Person[]  = [];

  constructor() { }

  getPersons(): Observable<any[]> {
      return of(this.persons);
  }

  addPerson(person): void {
    this.persons.push(person);
    console.warn(this.persons);
  }
}

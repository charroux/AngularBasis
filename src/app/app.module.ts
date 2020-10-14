import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonneComponent } from './personne/personne.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

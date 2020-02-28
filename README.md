
# AngularBasis

The class to be displayed: https://github.com/charroux/AngularBasis/blob/master/src/app/personne/person.ts

The Angular form: https://github.com/charroux/AngularBasis/blob/master/src/app/personne/personne.component.html

The related component: https://github.com/charroux/AngularBasis/blob/master/src/app/personne/personne.component.ts

FormsModule and ReactiveFormsModule should be included into app.module.ts should contains:

```javascript
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

...

imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
```

https://github.com/charroux/AngularBasis/blob/master/src/app/app.module.ts

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Docker 

This project is provided with a Dockerfile: 

Use the following command to build a docker image: 

```javascript
docker build -t angularbasis:dev .
```

Launch the docker container with: 

```javascript
docker run -v ${PWD}:/app -v /app/node_modules -p 4201:4200 --rm angularbasis:dev
```

Then test the app at: http://localhost:4201/

Don't forget the character . at the en of the line (this docker command looks for the Dockerfile in the current folder).

### Stop the docker container

Get the container ID with: 

```javascript
docker ps
```

Then stop the container with: 

```javascript
docker stop 19ba42399129
```

replace 19ba42399129 with the Container ID.



# NetberryTasksManager

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Roadmap
[X] Create model classes for user and login
[X] Implement api-routes helper for build the routes for the api requests
[X] Install json-server and preparate the db.json file for the mock data
[X] Encapsulate the text input in components
[X] Create Login page
[X] Implement guard for check if the user is authenticated when we refresh de app. If it's not authenticated then, we redirect the system to login form page.
[X] Interceptor for send token in the api request
[X] Get a user data if the user is authenticated (there is a token in localstorage) in the app refresh we use ii for do a api 
[X] Create model classes for task and task type
[X] Encapsulate the select input in components
[X] Encapsulate the text area input in components
[X] Build the task manager page
[X] Redirect after the login to the task manager page
[X] Redirect after refresh (if the user is authenitcated) to the task manager page
[X] Implement the tasks table in the task manager page
[X] Implement the new action (with a modal)
[X] Implement the edition action (with a modal)
[X] Implement the delete action (with a confirmation modal)
[X] Success messages
[X] Specify the project run steps 

## Topics to analize
- To use ngxs plugin in order to work with a state management pattern
- Add i18n plugin for translation
- To separate the system in a share module + feature modules (for example a module for task management)
- Create a template component for the modals
- Create a abstract class for the forms (with new, edit, save and update methods)
- Implemente a privilege services (methods by profile and by specific privilege)
- Add noty plugin for message notifications (success operation and erros)
- Manage the token expiration
- Create or use a generic component for tables
- Implement Pagination, filters, ordering (we could create a abstract service for all tables)
- Bulk action: for example delete (with a confirmation modal) 


## Intructions for run the project
- npm i
- npm install -g json-server
- ng serve
- json-server --watch mock-data/db.json --routes mock-data/routes.json -m ./node_modules/json-server-auth
- In login page, use the next credentials. Email: user1@email.com Password:1234567890
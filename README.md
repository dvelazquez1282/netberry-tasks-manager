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
[] Implement a server for the api request (route helper, flow with possibility to use mock data or api request, etc..)
[] Login page
[] Interceptor for send token in the api request
[] Guard for check if the user is authenticated when we refresh de app. If it's authenticated (there is a token in localstorage) we use ii for do a api request in order to get the user info. If it's not uathenticated then, we redirect the system to login form page.
[] Create model classes for task
[] Build the task manager page
[] Redirect after the login to the task manager page
[] Redirect after refresh (if the user is authenitcated) to the task manager page
[] Implement the tasks table in the task manager page (with pagination, filter by type, ordering by date of the tasks)
[] Implement the new action (with a modal)
[] Implement the edition action (with a modal)
[] Implement the delete action (with a confirmation modal)
[] Implement the delete bulk action (with a confirmation modal)


## Topics to analize
- To use ngxs plugin in order to work with a state management pattern
- Add i18n plugin for translation
- To separate the system in a share module + feature modules (for example a module for task management)
- Create a template component for the modals
- Create a abstract class for the forms (with new, edit, save and update methods)
- Implemente a privilege services (methods by profile and by specific privilege)
- Add noty plugin for message notifications (success operation and erros)
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { LoginComponent } from './pages/login/login.component';
import { TextInputComponent } from './inputs/text-input/text-input.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TaskTableComponent } from './tables/task-table/task-table.component';
import { TaskFormComponent } from './forms/task-form/task-form.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { TaskService } from './services/task.service';
import { TextAreaInputComponent } from './inputs/text-area-input/text-area-input.component';
import { SelectInputComponent } from './inputs/select-input/select-input.component';

@NgModule({
  declarations: [
    AppComponent,
    // Pages
    LoginComponent,
    TasksComponent,
    // Forms
    LoginFormComponent,
    TaskFormComponent,
    // Inputs    
    TextInputComponent,
    // Tables
    TaskTableComponent,
    TextAreaInputComponent,
    SelectInputComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,    
    HttpClientModule,
    NgbModule
  ],
  providers: [
    AuthService,
    TaskService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi   : true,
    },    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

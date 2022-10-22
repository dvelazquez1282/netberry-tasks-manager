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

@NgModule({
  declarations: [
    AppComponent,
    // Pages
    LoginComponent,
    // Forms
    LoginFormComponent,
    // Inputs
    TextInputComponent,
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
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi   : true,
    },    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

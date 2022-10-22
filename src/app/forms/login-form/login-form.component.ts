import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TextInputComponent } from 'src/app/inputs/text-input/text-input.component';
import { Login } from 'src/app/models/login.model';
import { TextInputComponentConfigType } from 'src/app/models/text-component-config.model';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { LoginResponse } from 'src/app/interfaces/login-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit, OnDestroy {

  @ViewChild('email') emailTextInput: TextInputComponent;
  @ViewChild('password') passwordTextInput: TextInputComponent;

  public debug: boolean;

  public login: Login;

  public formConfig: any = {
    email: {
      id: "email",
      label: "Email",
      rules: {
        required: true
      },
      type: TextInputComponentConfigType.email
    },
    password: {
      id: "password",
      label: "Password",
      rules: {
        required: true
      },
      type: TextInputComponentConfigType.password
    }
  }

  public subscription: Subscription;
  
  public error: string | null;
  

  constructor(public authService: AuthService, public router: Router) { 
    
  }

  ngOnInit(): void {
    this.debug = environment.debug;
    this.login = new Login();
  }

  isValidForm(): boolean {
    return this.emailTextInput?.valid() && this.passwordTextInput?.valid();
  }
  submit(): void {
    if(this.isValidForm()) {
      this.subscription = this.authService.login(this.login)
        .subscribe({
          next: (res: LoginResponse)=> {
            this.error = null;
            this.authService.setCurrentUser(res.user);
            this.authService.setToken(res.accessToken);
            this.router.navigate(['panel']);
          },
          error: (error) => {
            this.error = error;            
          }
        });

    }    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

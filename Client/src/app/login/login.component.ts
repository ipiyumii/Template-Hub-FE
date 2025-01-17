import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  accountService = inject(AccountService);
  private fb = inject(FormBuilder);
  loginForm: FormGroup = new FormGroup({});
  errorMessage = '';
  isLoginForm: boolean = true;

  model : any = {};
  // private router = inject(Router);
  
  constructor(private router: Router) { }

  ngOnInit() {
    this.initializeForm(); 
     this.model = {};
  }

  toggleForm() {
    this.isLoginForm = !this.isLoginForm;
  }

 
  initializeForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    if(this.loginForm.valid) {
      this.accountService.login(this.loginForm.value).subscribe({
        next: (Response) => {
          this.router.navigateByUrl('/nav');
        },
        error: (error) => {
          this.errorMessage = "Invalid username or password.";
        }
      });
    }
  }

  toggleToRegister() {

  }
  
  redirect() {
    this.router.navigate(['register']);
  }

  login() {
    this.accountService.login( 
      // userName: this.model.username,
      // password: this.model.password
      this.model
    ).subscribe({
      next: (Response) => {
        this.router.navigateByUrl('/nav');
      },
      error: (error) => {
      console.error('Login error', error);
      }
    });
  }

}

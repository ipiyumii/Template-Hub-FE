import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  accountService = inject(AccountService);
  model : any = {};
  // private router = inject(Router);
  
  constructor(private router: Router) { }

  ngOnInit() { }
 
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

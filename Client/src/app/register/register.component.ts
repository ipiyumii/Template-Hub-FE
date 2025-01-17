import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../_services/account.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  accountService = inject(AccountService);
  model : any = {};

  constructor(private router: Router) { }
  
  ngOnInit() {
    this.model = {};
  }
  
  redirect() {
    this.router.navigate(['login']);
  }

  register() {
    this.accountService.register(this.model)
    .subscribe({
      next: (Response) => {
        this.router.navigateByUrl('/nav');
      },
      error: (error) => {
      console.error('Login error', error);
      }
    });

  }
}

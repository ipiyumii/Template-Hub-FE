import { Component, inject, Inject } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  // accountService = Inject(AccountService);

  constructor(public accountService: AccountService, private router: Router) {}

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/login');

    sessionStorage.clear();
  }
}

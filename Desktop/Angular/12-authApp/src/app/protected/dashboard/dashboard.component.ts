import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  get usuario() {
    return this.authservice.usuario;
  }

  constructor(private router: Router, private authservice: AuthService) { }

  logout() {
    this.router.navigateByUrl('/auth');
    this.authservice.logout();
  }
}

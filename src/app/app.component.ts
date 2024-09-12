import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from './services/authservice.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private authService: AuthService, private router: Router) {}

  isLoggedIn() {
    return !!this.authService.getToken()
  }

  onLogout() {
    this.authService.logout()
    this.router.navigate(['/login'])
  }
}

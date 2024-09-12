import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/authservice.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  //create a form group bind to the form
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router

  ) { }
  ngOnInit(): void {

    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }


  onLogin() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        {
          next: (response) => {
            console.log('Login successful', response);
            this.authService.storeToken(response.token);
            // Navigate to home page or do other post-login actions
          },
          error: (error) => {
            console.error('Login failed', error);
            // Handle login error (show message to user, etc.)
          },
          complete: () => {
            console.log('Login attempt completed');
          }
        }
      )
    }
  }
}


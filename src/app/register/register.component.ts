import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/authservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  onRegister() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }


    this.authService.register(this.registerForm.value).subscribe(
      {
        next: (response) => {
          console.log('Registration successful', response);
          this.router.navigate(['/login'])
        },
        error: (error) => {
          console.error('Registration failed', error);
          // Handle login error (show message to user, etc.)
        }
      }
    )
  }
}


import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  isRegisterActive = false;

  loginForm = {
    email: '',
    password: ''
  };

  registerForm = {
    name: '',
    email: '',
    password: ''
  };

  toggleForm() {
    this.isRegisterActive = !this.isRegisterActive;
  }

  onLogin() {
    console.log('Login:', this.loginForm);
    // Aquí implementarías la lógica de login
  }

  onRegister() {
    console.log('Register:', this.registerForm);
    // Aquí implementarías la lógica de registro
  }
}

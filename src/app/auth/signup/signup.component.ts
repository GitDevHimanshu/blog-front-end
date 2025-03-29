import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Signup } from '../../shared/interfaces/global';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user: Signup = {
    name: '',
    email: '',
    password: '',
  };

  errorMessage: string = '';
  
  constructor(public apiServ: ApiService, private router: Router) {}

  async handleSignupSubmit(): Promise<void> {
    try {
      const response = await fetch(`${this.apiServ.backend_URL}signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.user),
      });
      response.status == 200 ? this.router.navigate(['']) : this.errorMessage = 'User already exists!'; this.user.email = "";
    } catch (error) {
      this.errorMessage = 'Bad Request!';
      
    }
  }
}

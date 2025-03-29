import { Component } from '@angular/core';
import { Login } from '../../shared/interfaces/global';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user:Login = {
    email: "",
    password: "",
  }

  errorMessage: string = ""

  constructor(public apiServ: ApiService, private router: Router) {}

  async handleLoginSubmit() : Promise<void> {
    let response = await fetch(`${this.apiServ.backend_URL}login`,{
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.user)
    })
    response.status == 200 ? this.router.navigate(['/otp']) : this.errorMessage = 'User already exists!'; this.user.email = "";
    
    }
}

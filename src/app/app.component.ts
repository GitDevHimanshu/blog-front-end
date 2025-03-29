import { Component } from '@angular/core';
// import { SignupComponent } from "./auth/signup/signup.component";
// import { LoginComponent } from "./auth/login/login.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Blog App';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth/auth.service';

import { HeaderComponent } from "./components/header/header.component";
import { ButtonComponent } from "./components/button/button.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private credentials = { username: 'admin', password: 'admin' };
  isAuthenticated = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    if (localStorage.getItem('token')) {
      const isValid = this.authService.verifyToken();

      if (!isValid) {
        this.login();
      } else {
        this.isAuthenticated = true;
      }
    } else {
      this.login();
    }
  }

  login() {
    this.authService.login(this.credentials).subscribe((res: any) => {
      localStorage.setItem('token', res.token);
      this.isAuthenticated = true;
    });
  }
}

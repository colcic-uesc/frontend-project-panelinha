import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth/auth.service';

import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private credentials = { username: 'admin', password: 'admin' };

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.login(this.credentials).subscribe((res: any) => {
      localStorage.setItem('token', res.token);
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/auth/login';

  constructor(private http: HttpClient) {}

  login(credentials: { username: string; password: string }) {
    return this.http.post(this.apiUrl, credentials);
  }
}

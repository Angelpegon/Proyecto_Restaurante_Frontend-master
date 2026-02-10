import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  @Injectable({
  providedIn: 'root'
})

  private apiUrl = 'http://localhost:8080/auth';

  constructor(private http: HttpClient) {}

  login(credentials: { usuario: string; password: string }) {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials);
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}

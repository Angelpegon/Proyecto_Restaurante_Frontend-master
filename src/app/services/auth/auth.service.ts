import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/auth';

  constructor(private http: HttpClient) { }
  // Login contra el backend
  login(credentials: { usuario: string; password: string }) {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials);
  }

  // Guardar token
  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  // Obtener token
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Logout
  logout() {
    localStorage.removeItem('token');
  }

  // Verificar login
  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}

import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  canActivate(): boolean {

    // Obtener el token del localStorage
    const token = localStorage.getItem('token');

    // Si NO hay token → no puede entrar
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return false;
    }
    // Si hay token → puede entrar
    return true;
  }
}

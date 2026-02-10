import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;
  usuario = '';
  password = '';
  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router,
    private authService: AuthService,
  ) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })


  } ngOnInit(): void {
  }
  login() {
    this.authService.login({
      usuario: this.form.value.usuario,
      password: this.form.value.password
    }).subscribe({
      next: (response) => {
        this.authService.saveToken(response.token);
        this.loading = true;
        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 1500);
      },
      error: () => {
        this.error();
        this.form.reset();
      }
    });
  }

  error() {
    this._snackBar.open('Usuario o contraseña invalido', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }
}
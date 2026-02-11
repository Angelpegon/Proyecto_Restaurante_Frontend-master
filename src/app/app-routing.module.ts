import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth/authGuard';

const routes: Routes = [
  // 🔓 Público
  { path: 'login', component: LoginComponent },
  // 🔒 Privado
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./components/dashboard/dashboard.module')
        .then(m => m.DashboardModule),
    canActivate: [AuthGuard]
  },
  // Redirecciones
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

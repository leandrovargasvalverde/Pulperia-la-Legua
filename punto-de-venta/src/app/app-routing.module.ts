import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { MainComponent } from './components/main/main.component';
import { ProductsComponent } from './components/products/products.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { HistorialVentasComponent } from './components/historial-ventas/historial-ventas.component';
import { ReportsComponent } from './components/reports/reports.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'main', component: MainComponent, ...canActivate(() => redirectUnauthorizedTo(['/register'])) },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'venta', component: VentasComponent },
  { path: 'historial-ventas', component: HistorialVentasComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'clients', component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { RouterModule, Routes } from '@angular/router';
// Componentes
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './utils/auth.guard';
import {AddEditProductComponent} from './components/add-edit-product/add-edit-product.component'


export const routes: Routes = [
    {path: '',  redirectTo: 'login', pathMatch:'full'},
    {path: 'login',component: LoginComponent},
    {path: 'signIn',component: SignInComponent},
    {path: 'add',component: AddEditProductComponent, canActivate: [AuthGuard]},
    {path: 'edit/:id', component:AddEditProductComponent, canActivate: [AuthGuard]},
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    //Siempre al Ultimo-->
    {path: '**',  redirectTo: 'login', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

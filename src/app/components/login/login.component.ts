import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import {UserServices} from '../../services/user.services';
import {User} from '../../interfaces/user'
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from '../../services/error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loading: boolean = false;
  username: string = '';
  password: string= '';

constructor(private toastr: ToastrService, private router:Router,private _userServices: UserServices,private _errorService: ErrorService ){

}


login() {

  // Validamos que el usuario ingrese datos
  if (this.username == '' || this.password == '') {
    this.toastr.error('Todos los campos son obligatorios', 'Error');
    return
  }

  // Creamos el body
  const user: User = {
    username: this.username,
    password: this.password
  }

  this.loading = true;
  this._userServices.login(user).subscribe({
    next: (token) => {
      localStorage.setItem('token', token);
      this.router.navigate(['/dashboard'])
    },
    error: (e: HttpErrorResponse) => {
      this._errorService.msjError(e);
      this.loading = false
    }
  })
}

}

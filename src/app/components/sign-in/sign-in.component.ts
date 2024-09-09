import { Component } from '@angular/core';
import {User} from '../../interfaces/user'
import { UserServices } from '../../services/user.services';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Console, error, log } from 'console';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {


  username: string = '';
  password: string = '';
  confirmpassword: string = '';
  loading: boolean= false;



  constructor( private _userServices: UserServices,private toastr: ToastrService, private router:Router){

  }


  Registrar(){

  if(this.username=='' || this.password==''||this.confirmpassword==''){
    this.toastr.error('Todos los campos son obligatorios', 'Error');
    return
   
  }

  if(this.confirmpassword!= this.password){
    this.toastr.error('Las contraseñas no coinciden', 'Error');
    return 
   
  }else{

    // Creamos el objeto
    const user: User = {
      username: this.username,
      password: this.password
    }
    this.loading=true;
    this._userServices.signIn(user).subscribe(({

      next: (v) =>{
        
        this.loading=true;
        this.toastr.success('Usuario ' + this.username +' Registrado', 'Proceso Exitoso!');
        this.router.navigate(['/login'])

      },error: (e: HttpErrorResponse)=>{

        this.loading=false;

        if(e.error.msg){

          this.toastr.error(e.error.mg,'Error')
          
        }else{
          this.toastr.error('Ocurrio un erro Inesperado','Error')

        }

      }
      
    
    }))


  }

  
}
}



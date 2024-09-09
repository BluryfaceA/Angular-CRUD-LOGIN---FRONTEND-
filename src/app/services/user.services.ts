import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';
import { User } from '../interfaces/user';

@Injectable({
    providedIn: 'root'
})

export class UserServices {


private  myAppUrl: string;
 private myApiUrl: String;

constructor(private http:HttpClient) { 
    //Almacenamos el link
    this.myAppUrl=environment.endpoint;
    this.myApiUrl = 'api/user';
}


signIn(user: User): Observable<any> {

    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`,user);

}

//El <String> es el tokken que se devuelve al iniciar session
login(user: User): Observable<string> {
    return this.http.post<string>(`${this.myAppUrl}${this.myApiUrl}/login`, user)
   }

    
}


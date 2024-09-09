import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { Product} from '../interfaces/product'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private  myAppUrl: string;
  private myApiUrl: String;
 
 constructor(private http:HttpClient) { 
     //Almacenamos el link
     this.myAppUrl=environment.endpoint;
     this.myApiUrl = 'api/products';
 }

 getProductos(): Observable<Product[]> {

  //const token = localStorage.getItem('token')
  //const headers = new HttpHeaders().set('Authorization',`Bearer ${token}`) 
  //return this.http.get<Product[]>(`${this.myAppUrl}${this.myApiUrl}`, { headers: headers } ) 
  return this.http.get<Product[]>(`${this.myAppUrl}${this.myApiUrl}`);
  
}

saveProduct(product: Product): Observable<void> {
  return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`,product);
  
}

  //Eliminar
delete(id: number):Observable<void>{

return this.http.delete<void>(this.myAppUrl + this.myApiUrl +'/'+ id);
    
}


}

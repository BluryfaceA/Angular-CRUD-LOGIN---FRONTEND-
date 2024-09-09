import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  listProduct: Product[] = []
  
  
  constructor(private _productService: ProductService,private toastr: ToastrService, private router:Router, private aRouter: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this._productService.getProductos().subscribe(data => {
      this.listProduct = data;
    })
  }


  deleteProduct(id:number){
    console.log(id)
    this._productService.delete(id).subscribe((data)=>{
      this.router.navigate(['/dashboard']);
     if(this.toastr.warning("Producto Eliminado con Éxito","Eliminado!!")){
      this._productService.getProductos().subscribe(data => {
        this.listProduct = data;
      })
     }
     
 })  
  
 }

}
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import {ProductService } from '../../services/product.service'
import  {Product } from '../../interfaces/product'

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrl: './add-edit-product.component.css'
})
export class AddEditProductComponent {
  name: string='';
  description: string='';
  id: number;
  operacion: String = 'Agregar';

  constructor(private toastr: ToastrService, private router:Router, private _productService: ProductService, private aRouter: ActivatedRoute){
    this.id =  Number(aRouter.snapshot.paramMap.get('id'));
  }


  addProduct(){

    if(this.name=='' ||this.description=='' ){

      this.toastr.error('Rellene todos los campos', ' ERROR');

    }else{

     // Creamos el body
    const producto: Product = {
    name: this.name,
    description: this.description
    }

      this._productService.saveProduct(producto).subscribe(()=>{
        this.toastr.success('Producto Agregado Exitosamente', 'Éxito!!!');
        this.router.navigate(['/dashboard']);
        
      })

    }



  }

  


}

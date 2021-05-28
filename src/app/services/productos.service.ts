import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductosService 
{
  products:  any[] = [];
  productsIdx: any[] = [];
  constructor( private http: HttpClient ) {
    this.getProducts();
    this.getProductsIdx();
   }

   private getProducts()
   {
     this.http.get('https://angular-html-c7a96-default-rtdb.firebaseio.com/productos.json').subscribe( (resp:any)=>{
      this.products = resp;
     });
   }

   private getProductsIdx()
   {
     this.http.get('https://angular-html-c7a96-default-rtdb.firebaseio.com/productos_idx.json').subscribe( (resp:any)=>{
      this.productsIdx = resp;
     });
   }
}

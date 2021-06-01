import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IProductIdx } from '../interface/productIdx.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService 
{
  isLoading = true;
  products: any[] =[];
  filterProducts: IProductIdx[] =[]
  constructor( private http: HttpClient ) {
    this.getProductsIdx();
   }

   private getProductsIdx()
   {
    return new Promise((resolve,reject)=>{
        this.http.get('https://angular-html-c7a96-default-rtdb.firebaseio.com/productos_idx.json').subscribe( ( resp: any )=>{
          this.products  = resp;
          this.isLoading = false;
          resolve(true);
        });
      })
   }

   getProduct( id:string )
   {
      return this.http.get(`https://angular-html-c7a96-default-rtdb.firebaseio.com/productos/${id}.json`);
   }

   searchProducts(item: string)
   {
      let searchItem = item.toLowerCase();
      this.filterProducts =[];
      if(this.products.length !== 0)
      {
        //si los productos están cargados
        this.filterAllProducts(searchItem);
      }
      else
      {
        //cargar productos
        this.getProductsIdx().then(()=>{
          this.filterAllProducts(searchItem);
        });
      }
   }

   private filterAllProducts( item: string )
   {
     this.filterProducts = this.products.filter((product)=>{
       return product.titulo.toLowerCase().indexOf(item) >= 0 || product.categoria.toLowerCase().indexOf(item) >=0; ;
     });
   }
   
}

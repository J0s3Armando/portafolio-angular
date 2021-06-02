import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductosService } from 'src/app/services/productos.service';

import { ProductInfo } from "../../interface/product-info.interface";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  product  : ProductInfo = {};
  productId: string      = '';
            nextPage     = { "url"  : "/home","label": "Ir al Inicio"};
            isLoading    = true;
  constructor( private url: ActivatedRoute, private productService: ProductosService ) { }

  ngOnInit(): void 
  {
    this.url.params.subscribe( params=>
      {
        this.productService.getProduct( params['id'] ).subscribe( (product: ProductInfo) =>
        {
          this.product   = product;
          this.productId = params['id'];
          this.isLoading = false;
          if(product!==null )
          {
            this.isNextPage(this.productId);
          }
        });
      });
  }

  private isNextPage(id: string)
  {
    let nextPosibleProduct = "prod-"+( +( id.split("-")[1] ) + 1);
    let elemento = this.productService.products.find(prod => prod.cod === nextPosibleProduct );

    if(elemento)
    {
      this.nextPage.url   = "/item/"+elemento.cod;
      this.nextPage.label = "Siguiente página";
    }
    else
    {
      this.nextPage.url   = "/home";
      this.nextPage.label = "Ir al Inicio";
    }
    console.log("se ejecutó");
  }

}

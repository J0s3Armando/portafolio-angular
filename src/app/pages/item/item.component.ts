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
  product: ProductInfo = {};
  productId: String = '';
  isLoading = true;
  constructor( private url: ActivatedRoute, private productService: ProductosService ) { }

  ngOnInit(): void {

    this.url.params.subscribe( params=>{
      // console.log(params['id']);

      this.productService.getProduct( params['id'] ).subscribe( (product: ProductInfo) =>{
        this.product = product;
        this.productId = params['id'];
        this.isLoading = false;
      });
    });

  }

}

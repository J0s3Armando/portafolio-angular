import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( private routeActive: ActivatedRoute , public productsService: ProductosService) { }

  ngOnInit(): void 
  {
    this.routeActive.params.subscribe((params)=>
    {
      this.productsService.searchProducts(params['item']);
    });
  }

}

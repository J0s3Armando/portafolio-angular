import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IInfoPage } from '../interface/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {
  info: IInfoPage = {};
  loaded = false;
  constructor( private http: HttpClient ) { 
    
    this.http.get('assets/data/data-page.json')
      .subscribe((resp:IInfoPage) =>{
        this.loaded = true;
        this.info = resp;
      });
  }
}

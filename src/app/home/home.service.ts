import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { products } from './home.model';

@Injectable({providedIn: 'root'})
export class homeService {
   private http=inject(HttpClient)
 
    constructor() { }
    homeitems():Observable<products[]>{
        return this.http.get<products[]>('https://fakestoreapi.com/products')
    }
    deleteproducets(id:number){
      return this.http.delete<any>(
  `https://fakestoreapi.com/products/${id}`
);
    }
    
}
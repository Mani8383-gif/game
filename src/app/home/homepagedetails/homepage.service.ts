import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { products } from '../home.model';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class homepageid {
    homedetail(arg0: string) {
      throw new Error('Method not implemented.');
    }
    constructor() { }
    private http=inject(HttpClient)

    homeitemsid(id:any):Observable<products>{
        return this.http.get<products>(`https://fakestoreapi.com/products/${id}`)
    }
    
}
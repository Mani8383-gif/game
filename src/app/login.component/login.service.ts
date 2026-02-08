import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { loginmodel } from './login.model';

@Injectable({providedIn: 'root'})
export class loginservice {
    constructor() { }
http=inject(HttpClient)
loginuser(loginmodel:loginmodel){
  return  this.http.post('https://dummyjson.com/user/login',loginmodel)
}



    localform(){
        debugger
       let storage=localStorage.getItem('form')
       let parse=JSON.parse(storage as string)
       if(parse){
       return true
       }else{
       return false
       }
       debugger
    }


}
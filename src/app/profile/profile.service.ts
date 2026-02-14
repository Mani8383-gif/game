import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { users } from './profile.model';

@Injectable({providedIn: 'root'})
export class takeusers {
    constructor() { }
    http=inject(HttpClient)
    getusers(){
       return this.http.get<users[]>('https://jsonplaceholder.typicode.com/posts')
    }
    uploadfile(file:File){
        const formdata=new FormData()
        formdata.append('file',file)
        return this.http.post('https://httpbin.org/post',formdata)
    }
}
import { JsonPipe, UpperCasePipe, NgStyle } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, debounceTime, filter, from, interval, map, merge, Observable, Subject, timer } from 'rxjs';
import { takeusers } from './profile.service';
import { users } from './profile.model';
import { Profileusers } from "./profileusers/profileusers";

@Component({
  selector: 'app-profile',
  imports: [FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
  providers:[takeusers]
})
export class Profile implements OnInit{

getusers=inject(takeusers)
router=inject(Router)
users!:users[]
home(){
  this.router.navigate(['home'])
}
value:string=''
name:string=''
showname:boolean=false
welcome(){
  this.showname=true
}
deb=new BehaviorSubject<string>('');
post!:Observable<users[]>
evennumber=interval(500)
formdata!:users
ngOnInit(): void {
   const data = localStorage.getItem('form');
    if (data) {
    this.formdata = JSON.parse(data);
  }
  

}



























// cdr: any;
// imagechange(e:any) {
// let file=e.target.files[0];
// if(file){
//   let reader=new FileReader();
//   reader.onload=(e:any)=>{
//     let binary=e.target.result;
//     console.log(binary);
//     let formdata=new FormData()
//     formdata.append('file',file)
//     console.log(formdata);
//     this.cdr.detectchanges();
//   }
//   reader.readAsBinaryString(file)
// }
// }

}

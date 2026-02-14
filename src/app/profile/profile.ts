import { JsonPipe, UpperCasePipe } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, debounceTime, filter, from, interval, map, merge, Observable, Subject, timer } from 'rxjs';
import { takeusers } from './profile.service';
import { users } from './profile.model';
import { Profileusers } from "./profileusers/profileusers";

@Component({
  selector: 'app-profile',
  imports: [FormsModule, UpperCasePipe, JsonPipe, Profileusers],
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

name:string=''
showname:boolean=false
welcome(){
  this.showname=true
}
deb=new BehaviorSubject<string>('');
post!:Observable<users[]>
evennumber=interval(500)

ngOnInit(): void {
  this.getusers.getusers().subscribe({
    next:((res)=>{
this.users=res 
console.log('done');

    })
  })
this.evennumber.pipe(
  map(v=>v*2),
  filter(v=>v%2==0)
  ,filter(v=>v<10)
).subscribe({
  next:((res)=>{
console.log(res);

  })
})
from([10,20,10,40]).subscribe({
  next:((res)=>{
console.log(res);

  })
})
this.deb.pipe(debounceTime(500)).subscribe({
  next:((res)=>{
console.log('end');

  })
})
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

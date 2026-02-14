import { Component, Inject, inject } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, delay, exhaustMap, of, Subject, timer } from 'rxjs';
import { FormBuilder, FormGroup, FormsModule } from "@angular/forms";
import { loginmodel } from './login.model';
import { JsonPipe, NgTemplateOutlet } from '@angular/common';
import { loginservice } from './login.service';

@Component({
  selector: 'app-login.component',
  imports: [FormsModule, NgTemplateOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers:[loginservice]
})
export class LoginComponent {
  isLoading = true;
 Loginservice=inject(loginservice)
  wrongpas:boolean=false
click=new Subject<void>()
  check:boolean=false
  form:loginmodel={
    username: '',
    password:''
  }
  router=inject(Router)
  loginmodels!:loginmodel

  
submit(){
 this.Loginservice.loginuser(
 { username: this.form.username,
  password:this.form.password
 }
 ).subscribe({
  next:((res)=>{debugger
    localStorage.setItem('form',JSON.stringify(res)) 
    this.router.navigate(['test'])
    this.wrongpas=false

  })
 })

}
constructor(){
  
this.click.pipe(
 debounceTime(300),exhaustMap(()=>{
  console.log('new request');
  
  return of('form submited').pipe(delay(1000))
 })

).subscribe(v=>{
  console.log(v);
  
})
}
}
//  this.click.next()
// if(this.form.name=='mani'&&this.form.password=='1383'){
//   this.wrongpas=false
// timer(2000).subscribe({
//   next:()=>{this.router.navigate(['home'])
//  localStorage.setItem('form',JSON.stringify(this.form)) 
// }
// })

// }else{
//   this.wrongpas=true
// }

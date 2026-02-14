import { Component, inject, IterableDiffers, OnInit } from '@angular/core';
import { debounceTime, delay, distinctUntilChanged, exhaustMap, filter, interval, map, Observable, Subject, Subscriber, switchMap, take, takeUntil, tap, timer } from 'rxjs';
import { __values } from 'tslib';
import { of } from 'rxjs';
import { FormsModule, MaxLengthValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { CurrencyPipe, DatePipe } from '@angular/common';
@Component({
  selector: 'app-test',
  imports: [FormsModule,DatePipe],
  templateUrl: './test.html',
  styleUrl: './test.css',
})
export class Test implements OnInit {
  list:string[]=[]
  
  router=inject(Router)
  item:string=''
  squares:number[]=[]
  value!:number

    addlist(item:string){
this.list.push(item)
this.saveToStorage()
    }
    saveToStorage() {
  localStorage.setItem('todo-list', JSON.stringify(this.list));
}

    remove(index:number){
      this.list.splice(index,1)
      this.saveToStorage()
 
    }
    ngOnInit() {
  
  const saved = localStorage.getItem('todo-list');

  if (saved) {
    this.list = JSON.parse(saved);
  }


  
}
click=new Subject<void>()

constructor(){

}
login(){
  this.router.navigate(['login'])
}

}

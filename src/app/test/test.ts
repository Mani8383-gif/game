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
  random:number=1
  value!:number
  generate=interval(1000);
  adad=new Subject<number>()
square:number=0
   obs=new Observable(
    subscriber=>{
      subscriber.next(5);
      subscriber.next(3);
      subscriber.complete();
    });
    generating(){
      

    }
    removeshape(index:number){
      this.squares.splice(index,1)

    }
    g(square:number){
    this.squares.push(square)
    
    }
    change(){
   const randomvalue= this.random*Math.round((Math.random())*5)
      this.adad.next(randomvalue)
      
    }
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
      this.adad.pipe(
        distinctUntilChanged(),
        filter(v=>v<=3)
        
      ).subscribe(v=>{
        this.value=v;
        console.log(v);
        
      }
      )

  const saved = localStorage.getItem('todo-list');

  if (saved) {
    this.list = JSON.parse(saved);
  }


  
}
click=new Subject<void>()

constructor(){
this.click.pipe(debounceTime(500)
).subscribe(v=>{
  console.log('last',v);
  
})

}

}

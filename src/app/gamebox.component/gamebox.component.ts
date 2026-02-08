import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { filter, interval, map, pluck, Subscription, takeUntil, takeWhile, timeInterval } from 'rxjs';
import { shape } from './shape.model';
import { JsonPipe, NgClass, NgStyle } from '@angular/common';



@Component({
  selector: 'app-gamebox.component',
  imports: [NgStyle],
  templateUrl: './gamebox.component.html',
  styleUrl: './gamebox.component.css',
})
export class GameboxComponent {
  scores:any[]=[]

lives:number=3
shapes:shape[]=[]
score:number=0
speed:number=2
startgame:Subscription=new Subscription()
moveshape:Subscription=new Subscription()
x!:number 
start=interval(1000)
game:boolean=false
  containerWidth!: number;

  constructor(private cdr: ChangeDetectorRef) {

   }
   randomwidth=[40,55]
   randomshape=[0,50,100]
randomcolor=['red','blue','green','pink']
gamestart(){
  this.lives=3
  this.speed=2
  this.shapes=[]
  this.score=0
  this.game=true
  this.startgame=this.start.subscribe(()=>{
  
     const newShape: shape = {
        height: 40,
        width:this.randomwidth[Math.floor(Math.random()*2)],
        background: this.randomcolor[Math.floor(Math.random()*4)],
        top: 0,
        borederradious:this.randomshape[Math.floor(Math.random()*3)],
        
        right: (Math.random() *(window.innerWidth*75/100))
      };
      this.shapes.push(newShape);
      this.cdr.detectChanges();
      



   })
 
  this.moveshape = interval(30).subscribe(() => {
  this.shapes.forEach((shape,index:number) => {
    shape.top += this.speed
   
    if(shape.top+shape.height>=window.innerHeight){
      this.lives--
      this.shapes.splice(index,1)
    }
    
     if(this.score>5){
      this.speed=4
    }
    
  });
   if(this.lives==0){
      this.gameend()
    }
    this.cdr.detectChanges()
  console.log(1);
  })

}
lastsavescore:any
block:any
gameend(){
this.moveshape?.unsubscribe()
this.startgame?.unsubscribe()
  this.game=false

  this.block={
  'display':'block'
}  
}
remove(index:number){
  this.shapes.splice(index,1)
  this.score++
  
}
}

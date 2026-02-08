import { Component, EventEmitter, input, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-homeitems',
  imports: [],
  templateUrl: './homeitems.html',
  styleUrl: './homeitems.css',
})
export class Homeitems {
@Input() id!:number 
@Input() title!:string | undefined
@Output() ondelete=new EventEmitter()
@Output() detail =new EventEmitter()
@Input() src:string=''
delete(e:any){
   e.stopPropagation()
  this.ondelete.emit(this.id)
 
}
details(){
this.detail.emit(this.id)
}
}

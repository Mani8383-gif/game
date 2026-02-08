import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Input, input, OnInit } from '@angular/core';
import { homeService } from './home.service';

import { JsonPipe } from '@angular/common';
import { Homeitems } from "../homeitems/homeitems";
import { Router } from '@angular/router';

import { products } from './home.model';

@Component({
  selector: 'app-home',
  imports: [ Homeitems],
  providers:[homeService],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit{

  products!: products[];
@Input() id:number |undefined
Homeservice=inject(homeService)
router=inject(Router)

detailpage(id:number){
  debugger
this.router.navigate(['/products',id])
debugger
}
constructor(private cdr:ChangeDetectorRef){

}
delete(id:number){
   this.products = this.products.filter(p => p.id !== id);
  this.Homeservice.deleteproducets(id).subscribe({
    next:()=>{
    
    }
  })
}
ngOnInit(): void {
   
  this.Homeservice.homeitems().subscribe({
    next:((res)=>{
    
      this.products=res
      this.cdr.markForCheck()


    }),
    error:((err)=>{
      console.log('anjam nashod',err);
      
    })
  })
}
}

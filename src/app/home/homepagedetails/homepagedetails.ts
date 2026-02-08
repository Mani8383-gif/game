import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { homeService } from '../home.service';
import { homepageid } from './homepage.service';
import { products } from '../home.model';
import { JsonPipe } from '@angular/common';
import { HomeId } from '../home.id/home.id';

@Component({
  selector: 'app-homepagedetails',
  imports: [HomeId],
  templateUrl: './homepagedetails.html',
  styleUrl: './homepagedetails.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class Homepagedetails implements OnInit{
 Homeservice=inject(homeService)
 homedetailsid=inject(homepageid)
activateroute=inject(ActivatedRoute)
productsid!:products
ngOnInit() {
const productid=this.activateroute.snapshot.paramMap.get('id')
this.homedetail(productid as string)
}
constructor(private cdr:ChangeDetectorRef){}
homedetail(id:string){
this.homedetailsid.homeitemsid(id).subscribe({
  next:((res)=>{
this.productsid=res
console.log('done');
this.cdr.markForCheck()

  })
})
}
}

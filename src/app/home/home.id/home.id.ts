import { Component, Input, input } from '@angular/core';
import { NgClass } from "../../../../node_modules/@angular/common/types/_common_module-chunk";

@Component({
  selector: 'app-homeid',
  imports: [NgClass],
  templateUrl: './home.id.html',
  styleUrl: './home.id.css',
})
export class HomeId {
@Input() id!:number
@Input() title!:string
@Input() src!:string
@Input() desc!:string
@Input() price!:number 
expensive():boolean{
  return this.price>200
}
}

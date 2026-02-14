import { Component, Input, input } from '@angular/core';
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-homeid',
  imports: [NgClass],
  templateUrl: './home.id.html',
  styleUrl: './home.id.css',
})
export class HomeId {
@Input() id!:number
@Input() title?:string 
@Input() src!:string
@Input() desc!:string
@Input() price!:number 

}

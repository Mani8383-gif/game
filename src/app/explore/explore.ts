import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-explore',
  imports: [FormsModule],
  templateUrl: './explore.html',
  styleUrl: './explore.css',
})
export class Explore {
result:number=0
numberone(){
  this.result=1
}
}

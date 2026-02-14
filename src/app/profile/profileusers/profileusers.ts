import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profileusers',
  imports: [],
  templateUrl: './profileusers.html',
  styleUrl: './profileusers.css',
})
export class Profileusers {
@Input() titlr?:string
@Input() body?:string
}

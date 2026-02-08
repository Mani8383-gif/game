import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterOutlet],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  router=inject(Router)
 home(){
  this.router.navigate(['home'])
  }
  explore(){
this.router.navigate(['explore'])
  }
  post(){
this.router.navigate(['post'])
  }
  profile(){
this.router.navigate(['profile'])
  }
}

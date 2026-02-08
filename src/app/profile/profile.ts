import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-profile',
  imports: [FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {

router=inject(Router)
home(){
  this.router.navigate(['home'])
}



































// cdr: any;
// imagechange(e:any) {
// let file=e.target.files[0];
// if(file){
//   let reader=new FileReader();
//   reader.onload=(e:any)=>{
//     let binary=e.target.result;
//     console.log(binary);
//     let formdata=new FormData()
//     formdata.append('file',file)
//     console.log(formdata);
//     this.cdr.detectchanges();
//   }
//   reader.readAsBinaryString(file)
// }
// }

}

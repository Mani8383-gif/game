import { Routes } from '@angular/router';
import { Profile } from './profile';
import { homeService } from '../home/home.service';
import { Home } from '../home/home';
import { loginguard } from '../guard/login.guard';
export const profileroutes: Routes = [
    {
        path:'',
        component:Profile
    }
    ,
    {
        path:'home',
        component:Home,
        canActivate:[loginguard]
    }
]
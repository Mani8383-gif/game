import { Routes } from '@angular/router';
import { Home } from './home';
import { profileroutes } from '../profile/profile.routes';
import { Profile } from '../profile/profile';
import { loginguard } from '../guard/login.guard';
import { Homepagedetails } from './homepagedetails/homepagedetails';

export const homeroutes: Routes = [
    {
        path:'',
        component:Home
    },
    {
        path:'products/:id',
        component:Homepagedetails
    }
]
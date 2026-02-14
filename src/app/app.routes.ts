import { Routes } from '@angular/router';
import { GameboxComponent } from './gamebox.component/gamebox.component';
import { Test } from './test/test';
import { homeroutes } from './home/home.routes';
import { Navbar } from './navbar/navbar';
import { loginguard } from './guard/login.guard';
import { Homepagedetails } from './home/homepagedetails/homepagedetails';
import { LoginComponent } from './login.component/login.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full',
        
    },
    {
        path:'game',
        component:GameboxComponent,
      
        
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'test',
        component:Navbar,
        children:[
            {
                path:'',
                loadChildren:()=>import('./test/test.routes').then(r=>r.testroutes)

            }
        ]

    },
{
    path:'home',
    component:Navbar,
    children:[
        {
            path:'',
            loadChildren:()=>import('./home/home.routes').then(v=>v.homeroutes)
        }
    ]
},
{
    path:'profile',
    component:Navbar,
    
    children:[
        {
            path:'',
            loadChildren:()=>import('./profile/profile.routes').then(r=>r.profileroutes)
        }
    ]
}
,{
    path:'post',
    component:Navbar,
    children:[
        {
            path:'',
            loadChildren:()=>import('./post/post.routes').then(r=>r.postroutes)
        }
    ]
}
,{
    path:'explore',
    component:Navbar,
    children:[
        {
            path:'',
            loadChildren:()=>import('./explore/explor.routes').then(r=>r.exploreroutes)
        }
    ]
},
    {
        path:'products/:id',
        component:Homepagedetails
    }
];

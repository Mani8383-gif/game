import { inject, Injectable } from "@angular/core";
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,MaybeAsync,GuardResult } from "@angular/router";
import { loginservice } from "../login.component/login.service";
@Injectable()
export class loginguard implements CanActivate{
    
     local=inject(loginservice)
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
       return this.local.localform()
    }
}
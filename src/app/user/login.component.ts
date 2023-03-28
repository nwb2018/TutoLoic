import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
    templateUrl:'./login.component.html',
    styles:[`
        em {float: right; color: #E05C65; padding-left:10px;}
    `]
})

export class LoginComponent{
    userName
    password    
    mouseoverLogin

    constructor(private authService: AuthService, private router: Router){

    }
    login(formValue){
        this.authService.loginUser(formValue.userName,formValue.password);
        this.router.navigate(['events']);
    }


    cancel(){
        this.router.navigate(['events']);

    }
}
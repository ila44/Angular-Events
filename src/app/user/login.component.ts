import { Component } from '@angular/core'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'

@Component({
	templateUrl:'./login.component.html',
	styles:[`
		em {float:right;color:#E05C65; padding-left:10px;}
	`]
})

export class LoginComponent {
	username
	password
	mouseoverlogin
	
	constructor(private authService:AuthService, private route:Router) {

	}
	
	login(formval) {
		this.authService.loginUser(formval.userName,formval.password)
		this.route.navigate(['events'])
	}

	cancel() {
		this.route.navigate(['events'])
	}


}
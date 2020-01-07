import { Component } from '@angular/core'
import {OnInit } from '@angular/core'
import { FormControl,FormGroup } from '@angular/forms'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'

@Component({
  templateUrl: './profile.component.html',
  styles:[`
    em { float:right; color:#E05C65; padding-left:10px;}
    .error input { background-color:#E3C3c5;}
    .error ::webkit-input-placeholder {color:#999; }
    .error ::moz-placeholder { color:#999;}
    .error :-moz-placeholder { color:#999;}
    .error ::ms-input-placeholder { color:#999;}
  `]
})
export class ProfileComponent implements OnInit {
  
  profileForm:FormGroup
  private firstName:FormControl
  private lastName:FormControl

  constructor(private auth:AuthService, private route:Router) {

  }

  ngOnInit() {
    this.firstName = new FormControl(this.auth.currentUser.firstName)
    this.lastName = new FormControl(this.auth.currentUser.lastName)
    this.profileForm = new FormGroup({
      firstName:this.firstName,
      lastName:this.lastName
    })
  }

  cancel() {
    this.route.navigate(['/events'])
  }

  saveProfile(formval) {
    this.auth.updateCurrentUser(formval.firstName,formval.lastName)
    this.route.navigate(['/events'])
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched
  }
       
}
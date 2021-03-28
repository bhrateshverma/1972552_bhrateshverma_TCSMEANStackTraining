import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = new FormGroup({
    userName: new FormControl(),
    password: new FormControl()
  })
  usersMatch = new Map<string, string>()

  constructor(public router:Router) { }

  ngOnInit(): void {
    let usernames = localStorage.getItem("usernames")
    let passwords = localStorage.getItem("passwords")
    if(usernames && passwords){
      let userNameArr = JSON.parse(usernames)
      let passwordArr = JSON.parse(passwords)
      for(let i = 0; i < userNameArr.length; i++){
        this.usersMatch.set(userNameArr[i],passwordArr[i])
      }
    }
  }

checkUser() {
  if(this.usersMatch.has(this.login.value.userName)){
    if(this.usersMatch.get(this.login.value.userName)== this.login.value.password){
      sessionStorage.setItem("currentUser", this.login.value.userName)
      this.router.navigate(["portfolio"])
    } else {
      alert("Password doesn't match, Please try again")
    }
  }else {
    alert("Username doesn't match")
  }
}

signUp() {
  this.router.navigate(["sign-up"])
}
}
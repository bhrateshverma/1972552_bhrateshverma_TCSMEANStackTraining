import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  
  signup= new FormGroup({
  firstName:new FormControl(),
  lastName:new FormControl(),
  userName:new FormControl(),
  password:new FormControl()
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

  registerHere(){
    if(this.signup.value.firstName==null ||
        this.signup.value.lastName==null ||
        this.signup.value.userName==null ||
        this.signup.value.password==null ){
        alert("Please Fill all the inputs")
      }else{
        if(this.usersMatch.has(this.signup.value.userName)) {
          alert("The username already exists. \nPlease choose another one")
        }else {
          this.usersMatch.set(this.signup.value.userName, this.signup.value.password)
          let usernames = Array.from(this.usersMatch.keys());
          let passwords = Array.from(this.usersMatch.values());
          localStorage.setItem("usernames", JSON.stringify(usernames))
          localStorage.setItem("passwords", JSON.stringify(passwords)) 
          this.router.navigate["login"]
        }
      }
  }

  goToLogin(){
    alert("abc")
    this.router.navigate["login"]
  }
}

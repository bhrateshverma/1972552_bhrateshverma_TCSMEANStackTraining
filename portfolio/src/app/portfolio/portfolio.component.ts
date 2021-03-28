import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PortfolioList } from '../portfolio.module';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  myPortfolioMap = new Map<string, Array<string>>()

  currentUser:string=""
  currentPortfolio: Array<PortfolioList> = new Array()

  portfolio = new FormGroup({
    contactName: new FormControl(),
    phoneNo: new FormControl()
  })

  userPortfolio: Array<string> = new Array()
  regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im



  constructor(public router: Router) { }


  ngOnInit(): void {
    let testUser = sessionStorage.getItem("currentUser")

    if(testUser){
      this.currentUser= testUser
    }

    let testusers = localStorage.getItem("users")
    let portfolios = localStorage.getItem("portfolio")

    if(testusers && portfolios){
      let testUsersArray = JSON.parse(testusers)
      let portfolioArray = JSON.parse(portfolios)

      for(let i = 0; i < testUsersArray.length; i++){
        this.myPortfolioMap.set(testUsersArray[i],portfolioArray[i])
      }

      let array = this.myPortfolioMap.get(this.currentUser)
      if(array) {
        for(let i = 0; i < array.length; i+=2) {
          this.currentPortfolio.push(new PortfolioList(array[i], array[i+1]))
        }
      }
    }
  }
  save() {
    if(this.portfolio.value.contactName == null || this.portfolio.value.phoneNo == null){
      alert("All inputs are necessary to continue")
    }else{
      if(this.regex.exec(this.portfolio.value.phoneNo)){
        if(this.myPortfolioMap.has(this.currentUser)){
          let test = this.myPortfolioMap.get(this.currentUser)
          if(test) {
            this.userPortfolio = test
            this.userPortfolio.push(this.portfolio.value.contactName)
            this.userPortfolio.push(this.portfolio.value.phoneNo)
            this.myPortfolioMap.set(this.currentUser, this.userPortfolio)
          }
        }else{
          this.userPortfolio.push(this.portfolio.value.contactName)
          this.userPortfolio.push(this.portfolio.value.phoneNo)
          this.myPortfolioMap.set(this.currentUser, this.userPortfolio)
        }
        this.currentPortfolio.push(new PortfolioList(this.portfolio.value.contactName, this.portfolio.value.phoneNo))
        let testusers = JSON.stringify(Array.from(this.myPortfolioMap.keys()))
        let portfolio = JSON.stringify(Array.from(this.myPortfolioMap.values()))
        localStorage.setItem("testusers", testusers)
        localStorage.setItem("portfolio", portfolio) 
      }else{alert("Please enter a valid phone number")}
    }
  }
  goToLogin() {
    sessionStorage.removeItem("currentUser")
    this.router.navigate(["login"])
  }
}

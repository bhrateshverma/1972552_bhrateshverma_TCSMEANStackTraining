import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MyAuthGaurd } from './myauthguard';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
    {path:"\login", component:LoginComponent},
    {path:"\sign-up", component:SignUpComponent},
    {path:"\portfolio", component:PortfolioComponent, canActivate:[MyAuthGaurd]},
    {path:"", redirectTo:"\login", pathMatch:"full"}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
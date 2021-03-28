import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyAuthGaurd } from './myauthguard';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PortfolioComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, AppRoutingModule
  ],
  providers: [MyAuthGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }

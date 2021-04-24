import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  private username: string;
  private password: string;
  private error: string;
  constructor(private route: Router) { }

  ngOnInit() {
  }
    
     signup() {
        this.route.navigate(['./signup']);
      } 
     forgotpassword() {
        this.route.navigate(['./forgotpassword']);
      } 
     addroom() {
        this.route.navigate(['./addroom']);
      }
      async signIn() {
        try {
            const user = await Auth.signIn(this.username,this.password);
            console.log(user);
            this.route.navigate(['./tabs']);
            
        } catch (error) {
            console.error(error);
            this.error = error.message;

        }
    }

}

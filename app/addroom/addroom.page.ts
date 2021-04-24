import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { APIService } from '../API.service';

@Component({
  selector: 'app-addroom',
  templateUrl: './addroom.page.html',
  styleUrls: ['./addroom.page.scss'],
})
export class AddroomPage implements OnInit {
  private addroom : FormGroup;
  constructor(private route: Router,private formBuilder: FormBuilder , private apiService: APIService) {

    this.addroom = this.formBuilder.group({
      title: ['', Validators.required],
    });
  }

  ngOnInit() {
  }
     setup() {
        this.route.navigate(['./setup']);
} 
redirectTo(uri:string){
  this.route.navigateByUrl('/', {skipLocationChange: true}).then(()=>
  this.route.navigate([uri]));
}
addRoom(){
  console.log(this.addroom.value);
  this.apiService.CreateRoom({
    name: this.addroom.value.title
});
this.redirectTo('tabs/');
}

}

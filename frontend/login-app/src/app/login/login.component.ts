import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

loginRef = new FormGroup({
emailid:new FormControl(''),
password:new FormControl(''),
typeofuser:new FormControl('')
});

  constructor(ls:LoginService){         // DI for LoginService class 

  }


  signIn():void{
    let login = this.loginRef.value;
    console.log(login);
  
    this.loginRef.reset(); // Reset the form after submission
  }


}

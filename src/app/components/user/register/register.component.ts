import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private location: Location ) { }

  user = {
    name: 'Eduardo',
    lastname: 'Plua',
    username: 'eplua',
    email: 'eplua@example.com',
    password: 'eplua'
  }

  public isError = false;
  public msgError = '';

  ngOnInit() {
  }

  onRegister(form: NgForm){ 
    if(form.valid){
      this.authService
        .registerUser(this.user)
        .subscribe(user => {
          /*this.authService.setUser(user);
          const token = user.id;
          this.authService.setToken(token);*/
          this.router.navigate(['/user/login']);
          location.reload();
        },
        res => {
          this.msgError = res.error.error.details.messages.email;
          this.onIsError();
        });
    } else {
      this.onIsError();
    }
    
  }

  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
}


}

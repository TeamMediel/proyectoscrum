import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-usuariomenu',
  templateUrl: './usuariomenu.component.html',
  styleUrls: ['./usuariomenu.component.css']
})
export class UsuariomenuComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  cerrarsesion(){
    this.router.navigate(['/user/login']);
    localStorage.removeItem("currentUser");
    
    location.reload();
  }

 /* searchEncuesta() {
 
      return window.open("encuesta","_self","")
  
    }*/
}

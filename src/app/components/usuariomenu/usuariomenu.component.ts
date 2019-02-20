import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EncuestaService } from '../../services/encuesta.service';
import { Encuesta } from 'src/app/models/encuesta';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-usuariomenu',
  templateUrl: './usuariomenu.component.html',
  styleUrls: ['./usuariomenu.component.css'],
  providers: [EncuestaService]
})
export class UsuariomenuComponent implements OnInit {
  public encuesta:boolean;
  public usserLogged:User;

  constructor(private router: Router,private encuestaService: EncuestaService) {}

  ngOnInit() {
    this.encuesta=false;
    this.usserLogged=JSON.parse(localStorage.getItem("currentUser"));
    if(this.usserLogged!=null){
      if(this.usserLogged.roles=="usuario"){
        this.getValidacionEncuesta();
      }else{
        
        this.router.navigate(['/inicio']);
      }
    }else{
      this.router.navigate(['/user/login']);
    }
  }

  cerrarsesion(){
    this.router.navigate(['/user/login']);
    localStorage.removeItem("currentUser");
    
    location.reload();
  }
  getValidacionEncuesta(){
    this.encuestaService.getEncuestas()
      .subscribe(res => {
        this.encuestaService.encuestas = res as Encuesta[];
        console.log('getEncuesta', res);
        this.encuestaService.encuestas.forEach(element => {
          if(this.usserLogged._id==element.user_id){
            this.encuesta=true;
            console.log("entro");
          }
        });
      });
  }

 /* searchEncuesta() {
 
      return window.open("encuesta","_self","")
  
    }*/
}

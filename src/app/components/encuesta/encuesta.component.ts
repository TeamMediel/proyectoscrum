import { Component, OnInit } from '@angular/core';
import { EncuestaService } from '../../services/encuesta.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Encuesta } from 'src/app/models/encuesta';

declare var M: any;
@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css'],
  providers: [EncuestaService]
})
export class EncuestaComponent implements OnInit {
  
  constructor(private encuestaService: EncuestaService) { }

  ngOnInit() {
  }

  addEncuesta(form: NgForm) {
  
    this.encuestaService.postEncuesta(form.value)
      .subscribe(res => {
       // M.toast({html: 'Enviado'});
       console.log(form.value);
       console.log('Save succesfully');
       //window.open("inicio","_self","")
      });
    }
  
 

}

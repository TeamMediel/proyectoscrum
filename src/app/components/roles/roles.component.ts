import { Component, OnInit } from '@angular/core';
import { RolesService } from '../../services/roles.service';
import { NgForm } from '@angular/forms';
import { Roles } from 'src/app/models/roles';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css'],
  providers: [RolesService]
})
export class RolesComponent implements OnInit {

  constructor(private rolesService: RolesService) { }

  ngOnInit() {
    this.getRoles();
  }

  addRol(form: NgForm) {
    if(form.value._id){
      this.rolesService.putRol(form.value)
      .subscribe(res => {
        this.resetForm(form);
        console.log('Update succesfully');
        this.getRoles();
      });
    }else{
    this.rolesService.postRol(form.value)
      .subscribe(res => {
        this.resetForm(form);
        console.log('Save succesfully');
        this.getRoles();
      });
    }
  }
 
  getRoles() {
    this.rolesService.getRoles()
      .subscribe(res => {
        this.rolesService.roles = res as Roles[];
        console.log('getRoles', res);
      });
  }

  editRol(roles: Roles) {
    this.rolesService.selectedRol = roles;
  }

  deleteRol(_id: string) {
    if(confirm('Are you sure you want to delete it?')){
    this.rolesService.deleteRol(_id)
      .subscribe(res => {
      this.getRoles();
      console.log('Deleted succesfully');
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form){
      form.reset();
      this.rolesService.selectedRol = new Roles();
    }
  }

}

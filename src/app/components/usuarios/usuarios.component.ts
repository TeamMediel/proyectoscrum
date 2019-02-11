import { Component, OnInit } from '@angular/core';
 
import { UserService } from '../../services/user.service';
import { RolesService } from '../../services/roles.service';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { Roles } from 'src/app/models/roles';

//declare var M: any;

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers: [UserService, RolesService]

})
export class UsuariosComponent implements OnInit {

  constructor(private userService: UserService, private rolesService: RolesService) { }

  ngOnInit() {
    this.getUsers();
    this.getRoles();
  }

  addUser(form: NgForm) {
    if(form.value._id){
      this.userService.putUser(form.value)
      .subscribe(res => {
        this.resetForm(form);
        console.log('Update succesfully');
        this.getUsers();
      });
    }else{
    this.userService.postUser(form.value)
      .subscribe(res => {
        this.resetForm(form);
        console.log('Save succesfully');
        this.getUsers();
      });
    }
  }
 
  getUsers() {
    this.userService.getUsers()
      .subscribe(res => {
        this.userService.users = res as User[];
        console.log('getUsers', res);
      });
  }

  getRoles() {
    this.rolesService.getRoles()
      .subscribe(res => {
        this.rolesService.roles = res as Roles[];
        console.log('getRoles', res);
      });
  }

  editUser(user: User) {
    this.userService.selectedUser = user;
  }

  deleteUser(_id: string) {
    if(confirm('Are you sure you want to delete it?')){
    this.userService.deleteUser(_id)
      .subscribe(res => {
      this.getUsers();
      console.log('Deleted succesfully');
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form){
      form.reset();
      this.userService.selectedUser = new User();
    }
  }

}

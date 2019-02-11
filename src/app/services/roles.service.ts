import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Roles } from '../models/roles';
import { RolesComponent } from '../components/roles/roles.component';



@Injectable({
  providedIn: 'root'
})
export class RolesService {

  selectedRol: Roles;
    roles: Roles[];
    readonly URL_API = 'http://localhost:3000/roles';

  constructor(private http: HttpClient) {
    this.selectedRol = new Roles();
  }

  getRoles(){ 
    return this.http.get(this.URL_API);
  }

  postRol(Roles: Roles){ 
    return this.http.post(this.URL_API, Roles);
  }

  putRol(roles: Roles){ 
    return this.http.put(this.URL_API + `/${roles._id}`, roles);
  }

  deleteRol(_id: string){ 
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}

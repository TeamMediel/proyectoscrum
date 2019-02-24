export class User {
    constructor(_id = '', roles = '', name = '', lastname = '', email = '', password = '',estadolineagrafica=''){
        this._id = _id;
        this.roles = roles;
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.estadolineagrafica = estadolineagrafica;
    }

    _id: string;
    roles:string;
    name:string;
    lastname: string;
    email: string;
    password: string;
    estadolineagrafica:string;
}

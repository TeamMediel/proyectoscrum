export class User {
    constructor(_id = '', roles = '', name = '', lastname = '', email = '', username = '', password = ''){
        this._id = _id;
        this.roles = roles;
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.username = username;
        this.password = password;
    }

    _id: string;
    roles:string;
    name:string;
    lastname: string;
    email: string;
    username: string;
    password: string;
}

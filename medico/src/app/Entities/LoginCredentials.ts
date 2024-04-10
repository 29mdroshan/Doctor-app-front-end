import { Role } from "./Role";

export class LoginCredentials{
    constructor(public username:string,public password:string,public role:Role){}
}
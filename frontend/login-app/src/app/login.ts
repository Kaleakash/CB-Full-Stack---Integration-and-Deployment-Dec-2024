// this class must be map to entity class in login in login-micro service add login table in database
export class Login {
    constructor(
    private emailid:string,     // instance variable consider as private
    private password:string,
    private typeofuser:string,
    private changePassword:string    
    ){}
}

class User{
    id:number=0;
    login:string="";
    password:string | undefined="";
    name:string="";
    email:string="";
    dateOfBirth:Date=new Date();
    address:string="";
    neighborhood:string="";
    city:string="";
    zipCode:string="";
    phone:string="";
}

export default User;
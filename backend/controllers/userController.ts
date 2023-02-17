import express, { Express, Request, Response } from "express"
import User from "../classes/User";
import Utils from "../utils";

const userController = (app:express.Express, users:User[])=>{
    const folder = "/user"

    app.put(folder+"/register", (req:Request, res:Response)=>{
        let user:User = <User>req.body;
      
        try{
          if (!user.name || !user.login || !user.password || !user.email){
            throw "Campos necessários incompletos";
          }
      
          if (users.find(a=>a.login==user.login || a.email==user.email)){
            throw "Usuário já existente";
          }
      
          user.id = users.length;
          user.password = Utils.hashMd5(user.password);  
          users.push(user);
        }catch(ex){
          res.status(400).send(ex);
        }
      
        res.status(200).send();
    });
      
    app.post(folder+"/login", (req:Request, res:Response)=>{
        let user:User = <User>req.body;
        let loggedUser:User | undefined;
        
        try{
            if (!user.login || !user.password){
            throw "Campos necessários incompletos";
            }
        
            loggedUser = users.find(a=>a.login==user.login && a.password==Utils.hashMd5(<string>user.password));
        
            if (!loggedUser){
            throw "Login ou senha incorretos";
            }
        
            loggedUser = JSON.parse(JSON.stringify(loggedUser));
            delete loggedUser?.password;
        }catch(ex){
            res.status(400).send(ex);
        }
        
        res.status(200).send(loggedUser);
    });
}

export default userController;
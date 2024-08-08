import { Router } from "express";
import { logout, signIn, signUp } from "../controller/userController.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const routerUser = Router();

routerUser.route("/users/sign-up").post(signUp);
routerUser.route("/users/sign-in").post(signIn);
routerUser.route("/users/logout").post(logout);
routerUser.get("/users/check-cookie",verifyJWT,async (req,res)=>{
    const refreshToken = req.cookies.refreshToken
    const accessToken =  req.cookies.accessToken

    if(refreshToken && accessToken){
       return res.status(200).json({message:true})
    }

    res.status(400).json({message:false})
})

export default routerUser;

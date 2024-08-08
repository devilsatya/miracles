const jwt=require('jsonwebtoken');
const dotenv =require('dotenv');
dotenv.config();
module.exports=function (req,res,next){
    try{
        let token=req.header('x-token');
            if(!token){
                return res.status(400).send("not found");

            }
        let decoded=jwt.verify(token,process.env.sceretkey);
        req.user=decoded.user;
        next();
        
    }catch (error) {
        console.error(error)
        return res.status(500).send({ error: "error occur at registration" });
    }
}
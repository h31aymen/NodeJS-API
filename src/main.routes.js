import express from 'express';
import services from './services/user.service';
import httpCodes from 'http-status-codes';

const route= express.Router();

route.get("/All", (req, res)=>{
    const users=services.getAll();

    if(users.length){
        return res.status(httpCodes.OK).send(users);
    }
    return res.status(httpCodes.NOT_FOUND).send({
        message: "our DB is empty"
    })
})

// module.exports= route;
export default route
import express from 'express';
import httpCodes from "http-status-codes";
import { expressYupMiddleware } from 'express-yup-middleware'

import services from './services/user.service'
import schemas from './user.schema'

const router= express.Router();

const status={
    "success": "OK",
    "failed": "NO"
}
router.get("/ping", (req, res)=>{
    res.status(httpCodes.OK).send({
        status: status.success,
        message:"Welcome"
    })
})

router.get("/:id",  expressYupMiddleware( {schemaValidator:schemas.getUser, expectedStatusCode: httpCodes.BAD_REQUEST}), (req, res)=>{
    var id= parseInt(req.params.id);
    var getting= services.get(id);

    if(typeof getting != null){
        res.status(httpCodes.OK);
        res.json({
            message: "Hello", 
            status: status.success, 
            getting
        });
    }else{
        res.status(httpCodes.NOT_FOUND);
        res.send({
            message: "Failed, Incorrect Id!", 
            status: status.failed 
        });        
    }
    
})

router.put("/:id", expressYupMiddleware( {schemaValidator:schemas.updateUser, expectedStatusCode: httpCodes.BAD_REQUEST}),(req, res)=>{
    var id= parseInt(req.params.id);
    var details=req.body// just a sample, to remove it after (i already removed it )
    console.log(details)
    const updatedUser= services.update(id, details);
    if (updatedUser==null){
        return res.status(httpCodes.NOT_FOUND).send({
            message: `the user with id: ${id} was not found `,
            status: status.failed
        })
    }else{
        return res.status(httpCodes.OK).send({
            message: `the user with id: ${id} and key ${updatedUser} is updated`,
            status: status.success, 
            updatedUser
        })
    }
})


router.post("/", expressYupMiddleware( {schemaValidator:schemas.addUser, expectedStatusCode: httpCodes.BAD_REQUEST}), (req, res)=>{
    const {body: req_body}= req;
    var addedUser= services.add(req_body)
    if(!req.body.name){
        return res.status(httpCodes.BAD_REQUEST).send({
            "status": status.failed,
            "message": "Incorrect Request",  
        })
    }
    return res.status(httpCodes.OK).send({
        message: "Hello, User!",
        addedUser
    })
})

router.delete("/remove/:id", (req, res)=>{
    var id= parseInt(req.params.id)
    const removedUser= services.remove(id);

    if(removedUser!= false){
        return res.status(httpCodes.OK).send({
            status: status.success,
            message: `the removed user with id ${id}`,
            removedUser
        })
    }
    return res.status(httpCodes.OK).send({
        status: status.failed,
        message: `theuser with id ${id} was not found`
    })
})

// export default router; // 
module.exports= router;
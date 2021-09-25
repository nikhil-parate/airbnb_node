const express = require('express');
const router = express.Router();
const authservice = require("../service/auth.service"); 

router.post('/register',async (req,res)=>{
    console.log(req.body,"register");
    await authservice.register(req.body, res);
    
})
router.post('/login',async (req,res)=>{
    console.log(req.body,"login");
    await authservice.userLogin(req.body, res);
   
})
router.get('/',async (req,res)=>{
    console.log(req.body,"data");
    await authservice.userData(req.body, res);
   
})

module.exports = router;

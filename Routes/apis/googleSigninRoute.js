const express = require('express');
const User = require('../../models/User');
const jwt = require('jsonwebtoken')
const loginRouter= express.Router();
const {OAuth2Client}= require('google-auth-library');

const client = new OAuth2Client('740792960585-ijlmjl16sjh77e9eccd8e8nk14j1gt35.apps.googleusercontent.com')
//POST googlelogin
loginRouter.post('/',async(req,res)=>{
console.log(req.body.tokenId);
const {tokenId}= req.body;
const response=await client.verifyIdToken({idToken:tokenId,audience:'740792960585-ijlmjl16sjh77e9eccd8e8nk14j1gt35.apps.googleusercontent.com'})
console.log(response.payload)
const {email_verified,email,name,picture} =response.payload;
const secret='secret'
if(email_verified){
  User.findOne({email}).exec((err,user)=>{
      if(err){
         return res.status(400).json({
              error:'Something went wrong'
          })
      }
      else{
          if(user){ //if user is alredy existing in database
            const token=jwt.sign({_id:user._id},secret,{expiresIn:'7d'})
            const {_id,name,email,picture}=user;
            res.json({
                token,
                user:{_id,name,email,picture}
            })
          }
          else{
              let newUser=new User({name,email,picture})
                  newUser.save((err,data)=>{
                      if(err){
                          return res.status(400).json({
                              error:'Something went worng'
                          })
                      }
                    const token=jwt.sign({_id:data._id},secret,{expiresIn:'7d'})
                    const {_id,name,email,picture}=newUser;
                    res.json({
                        token,
                        user:{_id,name,email,picture}
                    })
                 });
          }
      }
  })
}
});

module.exports=loginRouter;

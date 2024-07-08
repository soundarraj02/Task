const User = require ("../models/UserModules");
const md5 = require ("md5");
const jwt = require ('jwt-simple')



exports.login = async (req,res) => {
    try{
        let founduser = await User.findOne({email:req.body.email, password:md5(req.body.password)});
        if(founduser){
            let token = jwt.encode(founduser,'soundar@02');
            res.send({ststus:true,messange:"Successfully loggedIn",token:token});
            
        } else {
            res.send({ststus:false,message:"Email Or Password Wrong"});

        }
    }catch(e){
        console.log(e)
        res.send({ststus:false,message:"Error Occurred"});
    }
}

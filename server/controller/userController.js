const userModel = require('../model/userModel')

exports.signUp = async (req,res)=>{

    const username = req.body.username
    const password = req.body.password
    const email = req.body.email
    const phone = req.body.phone


    if(!username||!password||!email||!phone){
        
        res.json({
            msg:"please enter all data",
            data:[],
            state:0
        })
        return
    }


    const user = await userModel.findOne({
        username:username
    })




    if(user.username||user.email){
        res.json({
            msg:"username or email is already used",
            data:[],
            state:0
        })
        return
    }


    await userModel.create({
        Username:userName,
        Password:password,
        Email:email,
        Phone:phone
    }).then((data)=>{
        console.log(data)
        res.json({
            msg:'data created succesfully',
            data:data,
            state:1
        })

    }).catch((err)=>{
        console.log(err)
    })

}








exports.logIn = async (req,res)=>{

    const username = req.body.username
    const password = req.body.Password



    if(!username||!password){
        
        res.json({
            msg:"please enter username and password",
            data:[],
            state:0
        })
        return
    }

    const user = await userModel.findOne({
        username:username
    })

    if(password === user.password){
        res.json({
            msg:"authentication done succesfully",
            data:[],
            state:0
        })
        
    }else{
        res.json({
            msg:"username or password is incorrect",
            data:[],
            state:0
        })
        
    }





}